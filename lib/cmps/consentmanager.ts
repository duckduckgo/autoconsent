import { click, doEval, elementExists, elementVisible, wait, waitForElement } from "../rule-executors";
import AutoConsentCMPBase from "./base";

// Note: JS API is also available:
// https://help.consentmanager.net/books/cmp/page/javascript-api
export default class ConsentManager extends AutoConsentCMPBase {

  prehideSelectors = ["#cmpbox,#cmpbox2"];
  apiAvailable = false;

  get hasSelfTest(): boolean {
    return this.apiAvailable;
  }

  get isIntermediate(): boolean {
    return false;
  }

  constructor() {
    super("consentmanager.net");
  }

  async detectCmp() {
    this.apiAvailable = await doEval('window.__cmp && typeof __cmp("getCMPData") === "object"');
    if (!this.apiAvailable) {
      return elementExists("#cmpbox");
    } else {
      return true;
    }
  }

  async detectPopup() {
    if (this.apiAvailable) {
      return await doEval("!__cmp('consentStatus').userChoiceExists");
    }
    return elementVisible("#cmpbox .cmpmore", 'any');
  }

  async optOut() {
    await wait(500);
    if (this.apiAvailable) {
      return await doEval("__cmp('setConsent', 0)");
    }

    if (click(".cmpboxbtnno")) {
      return true;
    }

    if (elementExists(".cmpwelcomeprpsbtn")) {
      click(".cmpwelcomeprpsbtn > a[aria-checked=true]", true);
      click(".cmpboxbtnsave");
      return true;
    }

    click(".cmpboxbtncustom");
    await waitForElement(".cmptblbox", 2000);
    click(".cmptdchoice > a[aria-checked=true]", true);
    click(".cmpboxbtnyescustomchoices");
    return true;
  }

  async optIn() {
    if (this.apiAvailable) {
      return await doEval("__cmp('setConsent', 1)");
    }
    return click(".cmpboxbtnyes");
  }

  async test() {
    if (this.apiAvailable) {
      return await doEval("__cmp('consentStatus').userChoiceExists");
    }
  }
}
