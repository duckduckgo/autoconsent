import AutoConsentBase from "./base";
import { TabActor } from "../types";

export default class Onetrust extends AutoConsentBase {

  prehideSelectors = ["#onetrust-banner-sdk,#onetrust-consent-sdk,.optanon-alert-box-wrapper,.onetrust-pc-dark-filter,.js-consent-banner"]

  constructor() {
    super("Onetrust");
  }

  detectCmp(tab: TabActor) {
    return tab.elementExists("#onetrust-banner-sdk,.optanon-alert-box-wrapper");
  }

  detectPopup(tab: TabActor) {
    return tab.elementsAreVisible("#onetrust-banner-sdk,.optanon-alert-box-wrapper");
  }

  async optOut(tab: TabActor) {
    let res = true;

    if (await tab.elementExists("#onetrust-pc-btn-handler")) { // "show purposes" button inside a popup
      res = res && await tab.clickElement("#onetrust-pc-btn-handler");
    } else { // otherwise look for a generic "show settings" button
      res = res && await tab.clickElement(".ot-sdk-show-settings,button.js-cookie-settings");
    }

    res = res && await tab.waitForElement("#onetrust-consent-sdk", 2000);
    res = res && await tab.wait(1000);
    await tab.clickElements("#onetrust-consent-sdk input.category-switch-handler:checked,.js-editor-toggle-state:checked"); // optional step
    return res && tab.waitForThenClick(".save-preference-btn-handler,.js-consent-save", 1000);
  }

  async optIn(tab: TabActor) {
    return tab.clickElement("onetrust-accept-btn-handler,js-accept-cookies");
  }

  async test(tab: TabActor){
    return tab.eval("window.OnetrustActiveGroups.split(',').filter(s => s.length > 0).length <= 1");
  }
}
