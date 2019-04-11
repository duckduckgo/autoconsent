import AutoConsentBase from './base';

export default class QuantCast extends AutoConsentBase {
  constructor() {
    super('quantcast');
  }

  async detectCmp(tab) {
    return (await tab.elementExists('.qc-cmp-persistent-link')) || this.detectPopup(tab);
  }

  detectPopup(tab) {
    return tab.elementExists('#qcCmpUi');
  }

  async ensureOpened(tab) {
    return (await tab.elementExists('#qcCmpUi')) || this.openCmp(tab);
  }

  async optOut(tab) {
    if (!await this.ensureOpened(tab)) {
      // failed to get the cmp UI up
      return false;
    }
    // try global opt-out  for sites which display it
    if (!(await tab.clickElement('.qc-cmp-secondary-button'))) {
      // otherwise - click 'show purposes'
      await tab.clickElement('#qc-cmp-purpose-button');
      // publisher consents
      await tab.clickElements('.qc-cmp-publisher-purposes-table .qc-cmp-toggle-on');
      // third party consents
      await tab.clickElements('.qc-cmp-vendors-purposes-table .qc-cmp-toggle-on');
      // save and exit
      await tab.clickElement('.qc-cmp-save-and-exit');
    }
    return true;
  }

  async optIn(tab) {
    if (!await this.ensureOpened(tab)) {
      // failed to get the cmp UI up
      return false;
    }

    if (await tab.elementExists('.qc-cmp-button:nth-of-type(2)')) {
      await tab.clickElement('.qc-cmp-button:nth-of-type(2)');
    } else {
      await tab.clickElement('.qc-cmp-button');
    }
    return true;
  }

  async openCmp(tab) {
    await tab.eval('window.__cmp("displayConsentUi")');
    return tab.waitForElement('#qcCmpUi', 10000);
  }
}
