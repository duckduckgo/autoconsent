import AutoConsentBase, { waitFor } from "./base";
import { TabActor } from "../types";

export default class SourcePoint extends AutoConsentBase {
  constructor() {
    super("Sourcepoint");
  }

  detectFrame(_: TabActor, frame: { url: string }) {
    const url = new URL(frame.url);
    return (url.pathname === '/index.html' || url.pathname === '/privacy-manager/index.html')
      && url.searchParams.has('message_id') && url.searchParams.has('requestUUID');
  }

  async detectCmp(tab: TabActor) {
    return tab.elementExists("div[id^='sp_message_container_']")
  }

  async detectPopup(tab: TabActor) {
    return tab.elementsAreVisible("div[id^='sp_message_container_']")
  }

  async optIn(tab: TabActor) {
    return tab.clickElement(".sp_choice_type_11", tab.frame.id);
  }

  async optOut(tab: TabActor) {
    await tab.clickElement(".sp_choice_type_12", tab.frame.id);
    await waitFor(
      () =>
        new URL(tab.frame.url).pathname === "/privacy-manager/index.html",
      200,
      100
    );
    await tab.waitForElement('.type-modal', 20000, tab.frame.id);
    // reject all button is offered by some sites
    if (await tab.elementExists('.sp_choice_type_REJECT_ALL', tab.frame.id)) {
      return await tab.clickElement('.sp_choice_type_REJECT_ALL', tab.frame.id)
    }
    await tab.waitForElement('.pm-features', 10000, tab.frame.id);
    await tab.clickElements('.checked > span', tab.frame.id);
    if (await tab.elementExists('.chevron',  tab.frame.id)) {
      await tab.clickElement('.chevron', tab.frame.id)
    }
    return await tab.clickElement('.sp_choice_type_SAVE_AND_EXIT', tab.frame.id);
  }

  async test(tab: TabActor) {
    await tab.eval("__tcfapi('getTCData', 2, r => window.__rcsResult = r)");
    return tab.eval(
      "Object.values(window.__rcsResult.purpose.consents).every(c => !c)"
    );
  }
}
