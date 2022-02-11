/* global browser */
import { ConsentOMaticConfig } from "../lib/consentomatic";
import { AutoConsentCMPRule } from "../lib/rules";
import AutoConsent from "../lib/web";

const config = {
  autoOptOut: true,
}

const consent = new AutoConsent(<any>browser, browser.tabs.sendMessage);
const tabGuards = new Set();

type RuleBundle = {
  autoconsent: AutoConsentCMPRule[];
  consentomatic: { [name: string]: ConsentOMaticConfig };
}

async function loadRules() {
  const res = await fetch("./rules.json");
  const rules: RuleBundle = await res.json();
  Object.keys(rules.consentomatic).forEach((name) => {
    consent.addConsentomaticCMP(name, rules.consentomatic[name]);
  });
  rules.autoconsent.forEach((rule) => {
    consent.addCMP(rule);
  });
}

function log(...msg: any[]) {
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
          showOptOutStatus(tabId, "available");
          browser.pageAction.show(tabId);
          return true;
        } else if (cmp.hasTest() && (await cmp.testOptOutWorked())) {
          showOptOutStatus(tabId, "success");
        }
        return false;
      } else {
        log("no CMP found");
        return false;
      }
    } finally {
      tabGuards.delete(tabId);
    }
  }
}

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

browser.webNavigation.onCommitted.addListener(
  (details) => {
    if (details.frameId === 0) {
      consent.removeTab(details.tabId);
    }
  },
  {
    url: [{ schemes: ["http", "https"] }],
  }
);

browser.runtime.onMessage.addListener(({ type }: { type: string }, sender: any) => {
  consent.onFrame({
    tabId: sender.tab.id,
    frameId: sender.frameId,
    url: sender.url,
  });
  if (type === "frame" && sender.frameId === 0) {
    checkShouldShowPageAction({
      tabId: sender.tab.id,
      frameId: sender.frameId,
    }).then((isShown) => {
      if (isShown && config.autoOptOut) {
        runOptOut(sender.tab.id);
      }
    });
  }
});

async function runOptOut(tabId: number) {
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
}

browser.pageAction.onClicked.addListener(async (tab) => {
  const tabId = tab.id;
  runOptOut(tabId);
});

browser.tabs.onRemoved.addListener((tabId) => {
  consent.tabCmps.delete(tabId);
});

(<any>window).autoconsent = consent;
