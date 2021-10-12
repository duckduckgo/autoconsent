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

async function checkShouldShowPageAction({
  tabId,
  frameId,
}: {
  tabId: number;
  frameId: number;
}) {
  if (!tabGuards.has(tabId) && frameId === 0) {
    log("checking tab", tabId);
    try {
      tabGuards.add(tabId);
      const cmp = await consent.checkTab(tabId);
      await cmp.checked;
      if (cmp.getCMPName() !== null) {
        log("detected CMP:", cmp.getCMPName());
        if (await cmp.isPopupOpen()) {
          log("popup is open:", cmp.getCMPName());
          browser.pageAction.setTitle({
            tabId,
            title: "Click to opt out",
          });
          browser.pageAction.show(tabId);
        } else if (cmp.hasTest() && (await cmp.testOptOutWorked())) {
          showOptOutStatus(tabId, "success");
        }
      } else {
        log("no CMP found");
      }
    } finally {
      tabGuards.delete(tabId);
    }
  }
}

function showOptOutStatus(
  tabId: number,
  status: "success" | "complete" | "failed"
) {
  const title =
    status === "success" ? "Opt out successful!" : "Opt out complete!";
  browser.pageAction.setTitle({
    tabId,
    title,
  });
}

browser.webNavigation.onCompleted.addListener(consent.onFrame.bind(consent), {
  url: [{ schemes: ["http", "https"] }],
});

browser.runtime.onMessage.addListener(({ type }, sender) => {
  if (type === "frame" && sender.frameId === 0) {
    log("content script", type, sender);
    checkShouldShowPageAction({
      tabId: sender.tab.id,
      frameId: sender.frameId,
    });
  }
});

browser.pageAction.onClicked.addListener(async (tab) => {
  const tabId = tab.id;
  try {
    tabGuards.add(tabId);
    const cmp = consent.tabCmps.get(tabId);
    log("running opt out", tabId, cmp.getCMPName());
    await cmp.doOptOut();
    if (cmp.hasTest()) {
      log(
        "test opt out success",
        cmp.getCMPName(),
        await cmp.testOptOutWorked()
      );
      showOptOutStatus(tabId, "success");
    } else {
      log("no test for CMP", cmp.getCMPName());
      showOptOutStatus(tabId, "complete");
    }
  } finally {
    tabGuards.delete(tabId);
  }
});

browser.tabs.onRemoved.addListener((tabId) => {
  consent.tabCmps.delete(tabId);
});

(<any>window).autoconsent = consent;
