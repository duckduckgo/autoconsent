import AutoConsentBase, { waitFor } from './base';

export default class TagCommander extends AutoConsentBase {
  constructor() {
    super('tagcommander');
  }

  async detectCmp(tab) {
    try {
      return await tab.eval('window.tC && window.tC.privacyCenter !== undefined');
    } catch (e) {
      return false;
    }
  }

  async detectPopup(tab) {
    return (await tab.elementExists('#dnt-banner')) ||
      await tab.elementExists('#privacy-iframe') ||
      await tab.elementExists('#footer_tc_privacy') ||
      await tab.elementExists('#header_tc_privacy');
  }

  detectFrame(tab, frame) {
    return frame.url.startsWith('http://cdn.tagcommander.com/privacy') ||
      frame.url.startsWith('https://cdn.tagcommander.com/privacy');
  }

  async openFrame(tab) {
    if (await tab.elementExists('#footer_tc_privacy') || 
      await tab.elementExists('#footer_tc_privacy_privacy_center') ||
      await tab.elementExists('#header_tc_privacy')) {
      await this.openCmp(tab);
    }
  }

  async optOut(tab) {
    if (!await tab.elementExists('#privacy-iframe')) {
      await this.openFrame(tab);
      await waitFor(() => tab.frame, 10, 200);
    }
    await tab.wait(500);
    await tab.waitForElement('#privacy-cat-modal', 20000, tab.frame.id);
    await tab.wait(500);
    await tab.clickElements('.btn-yes', tab.frame.id);
    await tab.wait(200);
    await tab.clickElement('.modal-footer > button', tab.frame.id);
    return true;
  }

  async optIn(tab) {
    if (!await tab.elementExists('#privacy-iframe')) {
      await this.openCmp(tab);
      await waitFor(() => tab.frame, 10, 200);
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    await tab.waitForElement('#privacy-cat-modal', 20000, tab.frame.id);
    await tab.clickElements('.btn-no', tab.frame.id);
    await tab.clickElement('.modal-footer > button', tab.frame.id);
    return true;
  }

  async openCmp(tab) {
    await tab.eval('tC.privacyCenter.showPrivacyCenter();');
    if (await tab.waitForElement('#privacy-iframe', 10000)) {
      await new Promise(resolve => setTimeout(resolve, 500));
      return true;
    }
    return false;
  }

  async test(tab) {
    return tab.eval('tC.privacy.categories[0] === "-1"')
  }
}
