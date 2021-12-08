import AutoConsentBase, { success, waitFor } from "./base";
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
    return await tab.elementExists("div[id^='sp_message_container_']") || !!tab.frame
  }

  async detectPopup(tab: TabActor) {
    return await tab.elementsAreVisible("div[id^='sp_message_container_']") || !!tab.frame
  }

  async optIn(tab: TabActor) {
    return tab.clickElement(".sp_choice_type_11", tab.frame.id);
  }

  isManagerOpen(tab: TabActor) {
    return tab.frame && new URL(tab.frame.url).pathname === "/privacy-manager/index.html"
  }

  async optOut(tab: TabActor) {
    tab.hideElements(["div[id^='sp_message_container_']"])
    if (!this.isManagerOpen(tab)) {
      await waitFor(() => !!tab.frame, 30, 100);
      if (!await tab.elementExists("button.sp_choice_type_12", tab.frame.id)) {
        // do not sell button
        return tab.clickElement('button.sp_choice_type_13', tab.frame.id);
      }
      await success(tab.clickElement("button.sp_choice_type_12", tab.frame.id));
      await waitFor(
        () =>
          new URL(tab.frame.url).pathname === "/privacy-manager/index.html",
        200,
        100
      );
    }
    await tab.waitForElement('.type-modal', 20000, tab.frame.id);
    // reject all button is offered by some sites
    const path = await Promise.race([
      tab.waitForElement('.sp_choice_type_REJECT_ALL', 10000, tab.frame.id).then(r => 0),
      tab.waitForElement('.reject-toggle', 10000, tab.frame.id).then(() => 1),
      tab.waitForElement('.pm-features', 10000, tab.frame.id).then(r => 2),
    ]);
    if (path === 0) {
      await tab.wait(1000);
      return await success(tab.clickElement('.sp_choice_type_REJECT_ALL', tab.frame.id))
    } else if (path === 1) {
      await tab.clickElement('.reject-toggle', tab.frame.id)
    } else {
      await tab.waitForElement('.pm-features', 10000, tab.frame.id);
      await tab.clickElements('.checked > span', tab.frame.id);
      if (await tab.elementExists('.chevron',  tab.frame.id)) {
        await tab.clickElement('.chevron', tab.frame.id)
      }
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
