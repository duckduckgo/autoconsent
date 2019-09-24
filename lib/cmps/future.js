import AutoConsentBase, { waitFor } from './base';

const domains = [
  'techradar.com',
  'cyclingnews.com',
  'livescience.com',
  'gamesradar.com',
]

export default class Future extends AutoConsentBase {
  constructor() {
    super('future');
  }

  async detectCmp(tab) {
    return tab.elementExists('#cmp-container-id');
  }

  detectFrame(tab, frame) {
    return domains.some(d => frame.url.startsWith(`https://consent.cmp.${d}/`));
  }

  detectPopup(tab) {
    return tab.elementExists('#cmp-container-id');
  }

  async optIn(tab) {
    if (!await waitFor(() => !!tab.frame, 10, 500)) {
      throw new Error('no frame');
    };
    await waitFor(() => !!tab.frame, 10, 500);
    await tab.waitForElement('#mainMoreInfo', 10000, tab.frame.id);
    await tab.clickElement('#mainMoreInfo', tab.frame.id);
    await tab.clickElement('.cmp-btn-acceptall', tab.frame.id);
    await tab.clickElement('.cmp-btn-acceptall', tab.frame.id);
  }

  async optOut(tab) {
    if (!await waitFor(() => !!tab.frame, 10, 500)) {
      throw new Error('no frame');
    };
    await tab.waitForElement('#mainMoreInfo', 10000, tab.frame.id);
    await tab.clickElement('#mainMoreInfo', tab.frame.id);
    await tab.clickElement('.cmp-btn-rejectall', tab.frame.id);
    await tab.clickElement('#confirmLeave', tab.frame.id);
  }
}
