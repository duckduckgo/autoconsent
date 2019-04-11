import AutoConsentBase from './base';

export default class TechRadar extends AutoConsentBase {
  constructor() {
    super('TechRadar');
  }

  detectCmp(tab) {
    return Promise.resolve(tab.url.startsWith('https://www.techradar.com'));
  }

  detectPopup(tab) {
    return tab.elementExists('#cmp-container-id');
  }

  detectFrame(tab, frame) {
    return frame.url.startsWith('https://consent.cmp.techradar.com');
  }

  async optOut(tab) {
    if (!tab.frame) {
      await waitFor(() => tab.frame, 10, 200);
    }
    await tab.clickElement('#mainMoreInfo', tab.frame.id);
    await tab.clickElement('.cmp-btn-rejectall', tab.frame.id);
    await tab.clickElement('#confirmLeave', tab.frame.id);
    return true;
  }

  async optIn(tab) {
    if (!tab.frame) {
      await waitFor(() => tab.frame, 10, 200);
    }
    await tab.clickElement('#mainMoreInfo', tab.frame.id);
    await tab.clickElement('.cmp-btn-acceptall', tab.frame.id);
    return true;
  }

  async openCmp(tab) {
    await tab.eval('window.__cmp("renderConsents")');
    if (await tab.waitForElement('#privacy-iframe', 10000)) {
      await new Promise(resolve => setTimeout(resolve, 500));
      return true;
    }
    return false;
  }
}
