import AutoConsentBase from "./base";
import { TabActor } from "../types";

// Note: JS API is also available:
// https://help.consentmanager.net/books/cmp/page/javascript-api
export default class Evidon extends AutoConsentBase {
  constructor() {
    super("Evidon");
  }

  detectCmp(tab: TabActor) {
    return tab.elementExists("#_evidon_banner");
  }

  detectPopup(tab: TabActor) {
    return tab.elementsAreVisible("#_evidon_banner");
  }

  async optOut(tab: TabActor) {
    if (await tab.elementExists("#_evidon-decline-button")) {
      return tab.clickElement("#_evidon-decline-button");
    }
    tab.hideElements(["#evidon-prefdiag-overlay", "#evidon-prefdiag-background"])
    await tab.clickElement("#_evidon-option-button");
    await tab.waitForElement("#evidon-prefdiag-overlay", 5000);
    return tab.clickElement("#evidon-prefdiag-decline");
  }

  async optIn(tab: TabActor) {
    return tab.clickElement("#_evidon-accept-button");
  }
}
