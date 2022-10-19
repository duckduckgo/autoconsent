import { enableLogs } from "../lib/config";
import { BackgroundMessage, ContentScriptMessage } from "../lib/messages";
import { Config, RuleBundle } from "../lib/types";
import { manifestVersion, storageGet, storageRemove, storageSet } from "./mv-compat";
import { showOptOutStatus } from "./utils";

async function loadRules() {
  const res = await fetch("./rules.json");
  storageSet({
    rules: await res.json(),
  });
}

async function initConfig() {
  console.log('init sw');
  const storedConfig = await storageGet('config');
  console.log('storedConfig', storedConfig);
  if (!storedConfig) {
    console.log('init config');
    const defaultConfig: Config = {
      enabled: true,
      autoAction: 'optOut', // if falsy, the extension will wait for an explicit user signal before opting in/out
      disabledCmps: [],
      enablePrehide: true,
      detectRetries: 20,
    };
    await storageSet({
      config: defaultConfig,
    });
  }
}

async function evalInTab(tabId: number, frameId: number, code: string): Promise<chrome.scripting.InjectionResult[]> {
  if (manifestVersion === 2) {
    return new Promise((resolve) => {
      chrome.tabs.executeScript(tabId, {
        frameId,
        code: `!!window.eval(decodeURIComponent("${encodeURIComponent(code)}"))`
      }, (resultArr) => {
        resolve([{
          result: resultArr[0],
          frameId,
        }]);
      })
    });
  }
  return chrome.scripting.executeScript({
    target: {
      tabId,
      frameIds: [frameId],
    },
    world: "MAIN",
    args: [code],
    func: (code) => {
      try {
        return window.eval(code);
      } catch (e) {
        // ignore CSP errors
        console.warn('eval error', code, e);
        return;
      }
    },
  })
}

chrome.runtime.onInstalled.addListener(() => {
  loadRules();
  initConfig();
});
if (manifestVersion === 2) {
  // always load rules on startup in MV2
  loadRules();
  initConfig();
}

chrome.tabs.onRemoved.addListener((tabId: number) => {
  storageRemove(`detected${tabId}`);
});

chrome.runtime.onMessage.addListener(
  async (msg: ContentScriptMessage, sender: any) => {
    const tabId = sender.tab.id;
    const frameId = sender.frameId;
    if (enableLogs) {
      console.groupCollapsed(`${msg.type} from ${sender.origin || sender.url}`);
      console.log(msg, sender);
      console.groupEnd();
    }
    const rules: RuleBundle = await storageGet("rules");
    const autoconsentConfig: Config = await storageGet('config');
    enableLogs && console.log('got config', autoconsentConfig);

    switch (msg.type) {
      case "init":
        if (frameId === 0) {
          await showOptOutStatus(tabId, 'idle');
        }
        chrome.tabs.sendMessage(tabId, {
          type: "initResp",
          rules,
          config: autoconsentConfig,
        } as BackgroundMessage, {
          frameId,
        });
        break;
      case "eval":
        evalInTab(tabId, frameId, msg.code).then(([result]) => {
          if (enableLogs) {
            console.groupCollapsed(`eval result for ${sender.origin || sender.url}`);
            console.log(msg.code, result.result);
            console.groupEnd();
          }
          chrome.tabs.sendMessage(tabId, {
            id: msg.id,
            type: "evalResp",
            result: result.result,
          } as BackgroundMessage, {
            frameId,
          });
        });
        break;
      case "popupFound":
        await showOptOutStatus(tabId, "available", msg.cmp);
        storageSet({
          [`detected${tabId}`]: frameId,
        });
        break;
      case "optOutResult":
      case "optInResult":
        if (msg.result) {
          await showOptOutStatus(tabId, "working", msg.cmp);
          if (msg.scheduleSelfTest) {
            await storageSet({
              [`selfTest${tabId}`]: frameId,
            });
          }
        }
        break;
      case "selfTestResult":
        if (msg.result) {
          await showOptOutStatus(tabId, "verified", msg.cmp);
        }
        break;
      case "autoconsentDone": {
        await showOptOutStatus(tabId, "success", msg.cmp);
        // sometimes self-test needs to be done in another frame
        const selfTestKey = `selfTest${tabId}`;
        const selfTestFrameId = (await chrome.storage.local.get(selfTestKey))?.[selfTestKey];

        if (typeof selfTestFrameId === 'number') {
          enableLogs && console.log(`Requesting self-test in ${selfTestFrameId}`);
          storageRemove(selfTestKey);
          chrome.tabs.sendMessage(tabId, {
            type: "selfTest",
          }, {
            frameId: selfTestFrameId,
          });
        } else {
          enableLogs && console.log(`No self-test scheduled`);
        }
        break;
      }
      case "autoconsentError":
        console.error('Error:', msg.details);
        break;
    }
  }
);

if (manifestVersion === 2) { // MV3 handles this inside the popup
  chrome.pageAction.onClicked.addListener(async (tab) => {
    const tabId = tab.id;
    const detectedKey = `detected${tabId}`;
    const frameId = await storageGet(detectedKey);
    if (typeof frameId === 'number') {
      storageRemove(detectedKey);
      enableLogs && console.log("action.onClicked", tabId, frameId);
      await showOptOutStatus(tabId, "working");
      chrome.tabs.sendMessage(tabId, {
        type: "optOut",
      } as BackgroundMessage, {
        frameId,
      });
    }
  });
}
