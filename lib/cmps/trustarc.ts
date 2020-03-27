import AutoConsentBase, { waitFor } from './base';
import { TabActor } from '../types';

export default class TrustArc extends AutoConsentBase {
  constructor() {
    super('TrustArc');
  }

  detectFrame(_: TabActor, frame: { url: string }) {
    return frame.url.startsWith('https://consent-pref.trustarc.com/?');
  }

  async detectCmp(tab: TabActor) {
    if (tab.frame && tab.frame.url.startsWith('https://consent-pref.trustarc.com/?')) {
      return true;
    }
    return tab.elementExists('#truste-show-consent');
  }

  async detectPopup(tab: TabActor) {
    if (tab.frame) {
      return tab.waitForElement('#defaultpreferencemanager', 5000, tab.frame.id);
    }
    return tab.elementExists('#truste-show-consent');
  }

  async openFrame(tab: TabActor) {
    if (await tab.elementExists('#truste-show-consent')) {
      await tab.clickElement('#truste-show-consent');
    }
  }

  async navigateToSettings(tab: TabActor, frameId: number) {
    // wait for it to load
    await waitFor(async () => {
      return await tab.elementExists('.shp', frameId) ||
        await tab.elementsAreVisible('.advance', 'any', frameId) ||
        tab.elementExists('.switch span:first-child', frameId);
    }, 10, 500);
    // splash screen -> hit more information
    if (await tab.elementExists('.shp', frameId)) {
      await tab.clickElement('.shp', frameId);
    }
    // wait for consent options
    if (!await tab.waitForElement('.switch span:first-child', 2000, frameId)) {
      return false;
    }

    // go to advanced settings if not yet shown
    if (await tab.elementsAreVisible('.advance', 'any', frameId)) {
      await tab.clickElement('.advance', frameId);
    }
    // takes a while to load the opt-in/opt-out buttons
    return await waitFor(() => tab.elementsAreVisible('.switch span:first-child', 'any', frameId), 5, 1000);
  }

  async optOut(tab: TabActor) {
    await tab.hideElements(['.truste_overlay', '.truste_box_overlay', '.trustarc-banner', '.truste-banner']);
    return true;
  }

  async optIn(tab: TabActor) {
    if (!tab.frame) {
      await this.openFrame(tab);
      await waitFor(() => !!tab.frame, 10, 200);
    }
    const frameId = tab.frame!.id;
    await this.navigateToSettings(tab, frameId);
    await tab.clickElements('.switch span:nth-child(2)', frameId);
    await tab.clickElement('.submit', frameId);
    await waitFor(() => tab.elementExists('#gwt-debug-close_id', frameId), 300, 1000);
    await tab.clickElement('#gwt-debug-close_id', frameId);
    return true;
  }

  async openCmp(tab: TabActor) {
    await tab.eval('truste.eu.clickListener()');
    return true;
  }

  async test() {
    // TODO: find out how to test TrustArc
    return true;
  }
}
