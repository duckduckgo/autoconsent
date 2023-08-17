import { click, elementExists, elementVisible, waitForElement } from "../rule-executors";
import AutoConsentCMPBase from "./base";

export default class Klaro extends AutoConsentCMPBase {
  name = "Klaro";
  prehideSelectors = [".klaro"]
  settingsOpen = false;

  get hasSelfTest(): boolean {
    return true;
  }

  get isIntermediate(): boolean {
    return false;
  }

  get isCosmetic(): boolean {
    return false;
  }

  async detectCmp() {
    if (elementExists('.klaro > .cookie-modal')) {
      this.settingsOpen = true;
      return true;
    }
    return elementExists(".klaro > .cookie-notice");
  }

  async detectPopup() {
    return elementVisible(".klaro > .cookie-notice,.klaro > .cookie-modal", 'any');
  }

  async optOut() {
    if (click('.klaro .cn-decline')) {
      return true;
    }

    if (!this.settingsOpen) {
      click('.klaro .cn-learn-more');
      await waitForElement('.klaro > .cookie-modal', 2000);
      this.settingsOpen = true;
    }

    if (click('.klaro .cn-decline')) {
      return true;
    }

    click('.cm-purpose:not(.cm-toggle-all) > input:not(.half-checked)', true);
    return click('.cm-btn-accept');
  }

  async optIn() {
    if (click('.klaro .cm-btn-accept-all')) {
      return true;
    }
    if (this.settingsOpen) {
      click('.cm-purpose:not(.cm-toggle-all) > input.half-checked', true);
      return click('.cm-btn-accept');
    }
    return click('.klaro .cookie-notice .cm-btn-success');
  }

  async test() {
    return await this.mainWorldEval('EVAL_KLARO_1');
  }
}
