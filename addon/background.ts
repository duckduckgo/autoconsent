import { enableLogs } from "../lib/config";
import { BackgroundMessage, ContentScriptMessage } from "../lib/messages";
import { Config, RuleBundle } from "../lib/types";

const manifestVersion = chrome.runtime.getManifest().manifest_version;
const autoconsentConfig: Config = {
  enabled: true,
  autoAction: 'optOut', // if falsy, the extension will wait for an explicit user signal before opting in/out
  disabledCmps: [],
  enablePrehide: true,
  detectRetries: 20,
};

// Storage abstraction: MV2 keeps everything in memory, MV3 uses chrome.storage
const storage: {[key: string]: any} = {};
async function storageSet(obj: {[key: string]: any}): Promise<void> {
  if (manifestVersion === 2) {
    Object.assign(storage, obj);
    return;
  } 
  return chrome.storage.local.set(obj);
}

async function storageGet(key: string): Promise<{[key: string]: any}> {
  if (manifestVersion === 2) {
    return storage;
  }
  return chrome.storage.local.get(key);
}

async function storageRemove(key: string): Promise<void> {
  if (manifestVersion === 2) {
    delete storage[key];
    return;
  }
  return chrome.storage.local.remove(key);
}

async function loadRules() {
  const res = await fetch("./rules.json");
  storageSet({
    rules: await res.json(),
  });
}

async function evalInTab(tabId: number, frameId: number, code: string): Promise<chrome.scripting.InjectionResult[]> {
  if (manifestVersion === 2) {
    return new Promise((resolve) => {
      chrome.tabs.executeScript(tabId, {
        frameId,
        code: `!!window.eval(decodeURIComponent("${encodeURIComponent(code)}"))`
      }, (result) => {
        resolve([{
          result,
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
        return;
      }
    },
  })
}

chrome.runtime.onInstalled.addListener(() => {
  loadRules()
});
if (manifestVersion === 2) {
  // always load rules on startup in MV2
  loadRules()
}

function showOptOutStatus(
  tabId: number,
  status: "success" | "complete" | "working" | "available" | "verified" | "idle"
) {
  let title = "";
  let icon = "icons/cookie-idle.png";
  if (status === "success") {
    title = "Opt out successful!";
    icon = "icons/party.png";
  } else if (status === "complete") {
    title = "Opt out complete!";
    icon = "icons/tick.png";
  } else if (status === "working") {
    title = "Processing...";
    icon = "icons/cog.png";
  } else if (status === "verified") {
    title = "Verified";
    icon = "icons/verified.png";
  } else if (status === "idle") {
    title = "Idle";
    icon = "icons/cookie-idle.png";
  } else if (status === "available") {
    title = "Click to opt out";
    icon = "icons/cookie.png";
  }
  enableLogs && console.log('Setting action state to', status);
  const action = chrome.action || chrome.pageAction;
  if (chrome.pageAction) {
    chrome.pageAction.show(tabId);
  }
  action.setTitle({
    tabId,
    title,
  });
  action.setIcon({
    tabId,
    path: icon,
  });
}

chrome.runtime.onMessage.addListener(
  async (msg: ContentScriptMessage, sender: any) => {
    const tabId = sender.tab.id;
    const frameId = sender.frameId;
    if (enableLogs) {
      console.groupCollapsed(`${msg.type} from ${sender.origin || new URL(sender.url).origin}}`);
      console.log(msg, sender);
      console.groupEnd();
    }
    const rules: RuleBundle = (await storageGet("rules")).rules;

    switch (msg.type) {
      case "init":
        if (frameId === 0) {
          showOptOutStatus(tabId, 'idle');
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
            console.groupCollapsed(`eval result for ${sender.origin}`);
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
        showOptOutStatus(tabId, "available");
        storageSet({
          [`detected${tabId}`]: frameId,
        });
        break;
      case "optOutResult":
      case "optInResult":
        if (msg.result) {
          showOptOutStatus(tabId, "working");
          if (msg.scheduleSelfTest) {
            await storageSet({
              [`selfTest${tabId}`]: frameId,
            });
          }
        }
        break;
      case "selfTestResult":
        if (msg.result) {
          showOptOutStatus(tabId, "verified");
        }
        break;
      case "autoconsentDone": {
        showOptOutStatus(tabId, "success");
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

(chrome.action || chrome.pageAction).onClicked.addListener(async (tab) => {
  const tabId = tab.id;
  const detectedKey = `detected${tabId}`;
  const frameId = (await storageGet(detectedKey))?.[detectedKey];
  if (typeof frameId === 'number') {
    chrome.storage.local.remove(detectedKey);
    enableLogs && console.log("action.onClicked", tabId, frameId);
    showOptOutStatus(tabId, "working");
    chrome.tabs.sendMessage(tabId, {
      type: "optOut",
    } as BackgroundMessage, {
      frameId,
    });
  }
});
