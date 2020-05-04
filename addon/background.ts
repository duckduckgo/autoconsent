/* global browser */
import AutoConsent from "../lib/web";

const consent = new AutoConsent(<any>browser, browser.tabs.sendMessage);
const tabGuards = new Set();
let lastAction: { s: string; tab: number; t: number } = null;

async function loadRules() {
  const res = await fetch("./rules.json");
  const rules = await res.json();
  Object.keys(rules.consentomatic).forEach((name) => {
    consent.addConsentomaticCMP(name, rules.consentomatic[name]);
  });
  rules.autoconsent.forEach((rule) => {
    consent.addCMP(rule);
  });
}

function log(...msg) {
  console.log("[autoconsent]", ...msg);
}

loadRules();

browser.webNavigation.onCompleted.addListener(consent.onFrame.bind(consent), {
  url: [{ schemes: ["http", "https"] }],
});

browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tabInfo) => {
  if (changeInfo.status === "complete" && !tabGuards.has(tabId)) {
    log("checking tab");
    const url = new URL(tabInfo.url);
    // ignore not http
    if (!url.protocol.startsWith("http")) {
      return;
    }
    const host = url.hostname;
    try {
      tabGuards.add(tabId);
      const cmp = await consent.checkTab(tabId);
      await cmp.checked;
      if (cmp.getCMPName() !== null) {
        log("detected CMP:", cmp.getCMPName());
        if (await cmp.isPopupOpen()) {
          log("popup is open:", cmp.getCMPName());
          // check for repeated action - did we already try to opt-in/out on this site in the
          // last minute? If so, temporarily disable autoconsent on this site.
          if (
            lastAction &&
            lastAction.s === host &&
            tabId === lastAction.tab &&
            Date.now() - lastAction.t < 60000
          ) {
            log(
              "skip due to repeated action in last minute",
              tabId,
              cmp.getCMPName()
            );
            return;
          }
          log("doing opt out for ", cmp.getCMPName());
          console.time("processing opt out");
          await cmp.doOptOut();
          console.timeEnd("processing opt out");
        } else {
          log("no popup detected", cmp.getCMPName());
        }
      }
    } catch (e) {
      console.warn(e);
    } finally {
      tabGuards.delete(tabId);
    }
  }
});
