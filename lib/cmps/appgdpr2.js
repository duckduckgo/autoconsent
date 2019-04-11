/* eslint-disable no-await-in-loop */
import AutoConsentBase from './base';

export default class AppGdpr2 extends AutoConsentBase {
  constructor() {
    super('app_gdpr');
  }

  detectCmp(tab) {
    return tab.elementExists('div[class$="-app_gdpr"]');
  }

  async detectPopup(tab) {
    return !await tab.elementExists('div[class*="banner_hidden-"]') && this.detectCmp(tab);
  }

  async optOut(tab) {
    await tab.clickElement('button[class*="-intro_rejectAll"]');
    await tab.clickElements('span[class*="-switch_isSelected"]');
    await tab.clickElement('button[class*="details_save"]');
  }

  async optIn(tab) {
    await tab.clickElement('button[class*="-intro_acceptAll"]');
    return true;
  }
}
