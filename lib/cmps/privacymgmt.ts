import AutoConsentBase, { waitFor } from "./base";
import { TabActor } from "../types";

export default class PrivacyMgmt extends AutoConsentBase {
  constructor() {
    super("privacy-mgmt");
  }

  detectFrame(_: TabActor, frame: { url: string }) {
    return frame.url.startsWith("https://cdn.privacy-mgmt.com/");
  }

  async detectCmp(tab: TabActor) {
    return (
      tab.frame && tab.frame.url.startsWith("https://cdn.privacy-mgmt.com/")
    );
  }

  async detectPopup(tab: TabActor) {
    return (
      tab.frame &&
      tab.elementsAreVisible(".message", "any", tab.frame.id)
    );
  }

  async optIn(tab: TabActor) {
    return tab.clickElement(".message-button.btn-primary", tab.frame.id);
  }

  async optOut(tab: TabActor) {
    await tab.clickElement(".message-button.btn-secondary", tab.frame.id);
    await waitFor(
      () =>
        tab.frame.url.startsWith(
          "https://cdn.privacy-mgmt.com/privacy-manager"
        ),
      200,
      100
    );
    await tab.waitForElement(
      '.bulk-consent-btns[title*="Reject"]',
      20000,
      tab.frame.id
    );
    await tab.wait(50);
    return tab.clickElement(
      '.bulk-consent-btns[title*="Reject"]',
      tab.frame.id
    );
  }

  async test(tab: TabActor) {
    await tab.eval("__tcfapi('getTCData', 2, r => window.__rcsResult = r)");
    return tab.eval(
      "Object.values(window.__rcsResult.purpose.consents).every(c => !c)"
    );
  }
}
