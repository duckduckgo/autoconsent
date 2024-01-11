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
    if (this.elementExists('.klaro > .cookie-modal')) {
      this.settingsOpen = true;
      return true;
    }
    return this.elementExists(".klaro > .cookie-notice");
  }

  async detectPopup() {
    return this.elementVisible(".klaro > .cookie-notice,.klaro > .cookie-modal", 'any');
  }

  async optOut() {
    if (this.click('.klaro .cn-decline')) {
      return true;
    }

    if (!this.settingsOpen) {
      this.click('.klaro .cn-learn-more,.klaro .cm-button-manage');
      await this.waitForElement('.klaro > .cookie-modal', 2000);
      this.settingsOpen = true;
    }

    if (this.click('.klaro .cn-decline')) {
      return true;
    }

    this.click('.cm-purpose:not(.cm-toggle-all) > input:not(.half-checked,.required,.only-required),.cm-purpose:not(.cm-toggle-all) > div > input:not(.half-checked,.required,.only-required)', true);
    return this.click('.cm-btn-accept,.cm-button');
  }

  async optIn() {
    if (this.click('.klaro .cm-btn-accept-all')) {
      return true;
    }
    if (this.settingsOpen) {
      this.click('.cm-purpose:not(.cm-toggle-all) > input.half-checked', true);
      return this.click('.cm-btn-accept');
    }
    return this.click('.klaro .cookie-notice .cm-btn-success');
  }

  async test() {
    return await this.mainWorldEval('EVAL_KLARO_1');
  }
}
