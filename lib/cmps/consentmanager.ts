import { click, elementExists, elementVisible, wait, waitForElement } from "../rule-executors";
import AutoConsentCMPBase from "./base";

// Note: JS API is also available:
// https://help.consentmanager.net/books/cmp/page/javascript-api
export default class ConsentManager extends AutoConsentCMPBase {
  name = "consentmanager.net";

  prehideSelectors = ["#cmpbox,#cmpbox2"];
  apiAvailable = false;

  get hasSelfTest(): boolean {
    return this.apiAvailable;
  }

  get isIntermediate(): boolean {
    return false;
  }

  get isCosmetic(): boolean {
    return false;
  }

  async detectCmp() {
    this.apiAvailable = await this.mainWorldEval('EVAL_CONSENTMANAGER_1');
    if (!this.apiAvailable) {
      return elementExists("#cmpbox");
    } else {
      return true;
    }
  }

  async detectPopup() {
    if (this.apiAvailable) {
      // wait before making this check because early in the page lifecycle this may incorrectly return
      // true, causing an opt-out when it is not needed.
      await wait(500);
      return await this.mainWorldEval('EVAL_CONSENTMANAGER_2');
    }
    return elementVisible("#cmpbox .cmpmore", 'any');
  }

  async optOut() {
    await wait(500);
    if (this.apiAvailable) {
      return await this.mainWorldEval('EVAL_CONSENTMANAGER_3');
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
      return await this.mainWorldEval('EVAL_CONSENTMANAGER_4');
    }
    return click(".cmpboxbtnyes");
  }

  async test() {
    if (this.apiAvailable) {
      return await this.mainWorldEval('EVAL_CONSENTMANAGER_5');
    }
  }
}
