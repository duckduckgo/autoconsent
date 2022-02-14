import AutoConsentBase from "./base";
import { TabActor } from "../types";

// Note: JS API is also available:
// https://help.consentmanager.net/books/cmp/page/javascript-api
export default class ConsentManager extends AutoConsentBase {

  prehideSelectors = ["#cmpbox,#cmpbox2"]

  constructor() {
    super("consentmanager.net");
  }

  detectCmp(tab: TabActor) {
    return tab.elementExists("#cmpbox");
  }

  detectPopup(tab: TabActor) {
    return tab.elementsAreVisible("#cmpbox .cmpmore", "any");
  }

  async optOut(tab: TabActor) {
    if (await tab.elementExists(".cmpboxbtnno")) {
      return tab.clickElement(".cmpboxbtnno");
    }
    if (await tab.elementExists(".cmpwelcomeprpsbtn")) {
      await tab.clickElements(".cmpwelcomeprpsbtn > a[aria-checked=true]");
      return await tab.clickElement(".cmpboxbtnsave");
    }
    await tab.clickElement(".cmpboxbtncustom");
    await tab.waitForElement(".cmptblbox", 2000);
    await tab.clickElements(".cmptdchoice > a[aria-checked=true]");
    return tab.clickElement(".cmpboxbtnyescustomchoices");
  }

  async optIn(tab: TabActor) {
    return tab.clickElement(".cmpboxbtnyes");
  }
}
