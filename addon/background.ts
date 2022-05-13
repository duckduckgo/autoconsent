/* global browser */
import { enableLogs } from "../lib/config";
import { BackgroundMessage, ContentScriptMessage } from "../lib/messages";
import { RuleBundle } from "../lib/types";

type SendResponseFn = (payload: BackgroundMessage) => void;

let rules: RuleBundle = null;

async function loadRules() {
  const res = await fetch("./rules.json");
  rules = await res.json();
}

loadRules();

// browser.pageAction.show(tabId);

function showOptOutStatus(
  tabId: number,
  status: "success" | "complete" | "working" | "available"
) {
  let title = "Click to opt out";
  let icon = "icons/cookie.png";
  if (status === "success") {
    title = "Opt out successful!";
    icon = "icons/party.png";
  } else if (status === "complete") {
    title = "Opt out complete!";
    icon = "icons/tick.png";
  } else if (status === "working") {
    title = "Processing...";
    icon = "icons/cog.png";
  }
  browser.pageAction.setTitle({
    tabId,
    title,
  });
  browser.pageAction.setIcon({
    tabId,
    path: icon,
  });
}

browser.runtime.onMessage.addListener(
  (msg: ContentScriptMessage, sender: any, sendResponse: SendResponseFn) => {
    const tabId = sender.tab.id;
    const frameId = sender.frameId;
    const url = sender.url;
    enableLogs && console.log("received message", msg, sender);
    sendResponse({
      type: "initResp",
      rules,
      enabled: true,
      autoOptOut: true,
    });
  }
);

browser.pageAction.onClicked.addListener(async (tab) => {
  const tabId = tab.id;
  // runOptOut(tabId);
});
