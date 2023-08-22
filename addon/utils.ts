import { enableLogs } from "../lib/config";
import { Config } from "../lib/types";
import { storageGet, storageSet } from "./mv-compat";

export async function showOptOutStatus(
  tabId: number,
  status: "success" | "complete" | "working" | "available" | "verified" | "idle",
  cmp = '',
) {
  let title = "";
  let icon = "icons/cookie-idle.png";
  if (status === "success") {
    title = `Opt out successful! (${cmp})`;
    icon = "icons/party.png";
  } else if (status === "complete") {
    title = `Opt out complete! (${cmp})`;
    icon = "icons/tick.png";
  } else if (status === "working") {
    title = `Processing... (${cmp})`;
    icon = "icons/cog.png";
  } else if (status === "verified") {
    title = `Verified (${cmp})`;
    icon = "icons/verified.png";
  } else if (status === "idle") {
    title = "Idle";
    icon = "icons/cookie-idle.png";
  } else if (status === "available") {
    title = `Click to opt out (${cmp})`;
    icon = "icons/cookie.png";
  }
  enableLogs && console.log('Setting action state to', status);
  const action = chrome.action || chrome.pageAction;
  if (chrome.pageAction) {
    chrome.pageAction.show(tabId);
  }
  await action.setTitle({
    tabId,
    title,
  });
  await action.setIcon({
    tabId,
    path: icon,
  });
}

export async function initConfig() {
  const storedConfig = await storageGet('config');
  enableLogs && console.log('storedConfig', storedConfig);
  const defaultConfig: Config = {
    enabled: true,
    autoAction: 'optOut', // if falsy, the extension will wait for an explicit user signal before opting in/out
    disabledCmps: [],
    enablePrehide: true,
    enableCosmeticRules: true,
    detectRetries: 20,
    isMainWorld: false,
    prehideTimeout: 2000,
  };
  if (!storedConfig) {
    enableLogs && console.log('new config', defaultConfig);
    await storageSet({
      config: defaultConfig,
    });
  } else { // clean up the old stored config in case there are new fields
    const updatedConfig: Config = structuredClone(defaultConfig);
    for (const key of Object.keys(defaultConfig)) {
      if (typeof storedConfig[key] !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - TS doesn't know that we've checked for undefined
        updatedConfig[key] = storedConfig[key];
      }
    }
    enableLogs && console.log('updated config', updatedConfig);
    await storageSet({
      config: updatedConfig,
    });
  }
}
