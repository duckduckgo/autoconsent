import AutoConsentBase, { waitFor } from './base';
import { TabActor } from '../types';

const domains = [
  'techradar.com',
  'cyclingnews.com',
  'livescience.com',
  'gamesradar.com',
  'itproportal.com',
]

export default class Future extends AutoConsentBase {
  constructor() {
    super('future');
  }

  async detectCmp(tab: TabActor) {
    return !!((await tab.elementExists('#cmp-container-id')) && tab.frame);
  }

  detectFrame(tab: TabActor, frame: { url: string }) {
    return domains.some(d => frame.url.startsWith(`https://consent.cmp.${d}/`));
  }

  detectPopup(tab: TabActor) {
    return tab.elementExists('#cmp-container-id');
  }

  async optIn(tab: TabActor) {
    if (!await waitFor(() => !!tab.frame, 10, 500)) {
      throw new Error('no frame');
    };
    await waitFor(() => !!tab.frame, 10, 500);
    await tab.waitForElement('#mainMoreInfo', 10000, tab.frame!.id);
    await tab.clickElement('#mainMoreInfo', tab.frame!.id);
    await tab.clickElement('.cmp-btn-acceptall', tab.frame!.id);
    await tab.clickElement('.cmp-btn-acceptall', tab.frame!.id);
    return true;
  }

  async optOut(tab: TabActor) {
    if (!await waitFor(() => !!tab.frame, 10, 500)) {
      throw new Error('no frame');
    };
    await tab.waitForElement('#mainMoreInfo', 10000, tab.frame!.id);
    await tab.clickElement('#mainMoreInfo', tab.frame!.id);
    await tab.clickElement('.cmp-btn-rejectall', tab.frame!.id);
    await tab.clickElement('#confirmLeave', tab.frame!.id);
    return true;
  }
}
