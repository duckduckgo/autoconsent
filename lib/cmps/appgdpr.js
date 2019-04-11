/* eslint-disable no-await-in-loop */
import AutoConsentBase from './base';

export default class AppGdpr extends AutoConsentBase {
  constructor() {
    super('app_gdpr');
  }

  detectCmp(tab) {
    return tab.elementExists('div[class^="app_gdpr-"]');
  }

  async detectPopup(tab) {
    return !await tab.elementExists('div[class*="banner_hidden-"]') && this.detectCmp(tab);
  }

  async optOut(tab) {
    if (await tab.elementExists('a[class^="banner_learnMore-"]')) {
      await tab.clickElement('a[class^="banner_learnMore-"]');
    } else {
      // link to open options has no class or id, so this might be flaky
      await tab.clickElement('div[class^="banner_message-"] > span:first-child > a');
    }
    if (await tab.elementExists('span[class*="switch_isSelected-"]')) {
      // streamlined UI with categories
      await tab.clickElements('span[class*="switch_isSelected-"]');
    } else {
      // we have to turn off vendors for all categories...
      for (let i = 0; i < 5; i += 1) {
        await tab.clickElement('a[class^="summary_learnMore-"]');
        await tab.clickElements('span[class*="switch_isSelected-"]');
      }
    }
    await tab.clickElement('button[class*="details_save"]');
  }

  async optIn(tab) {
    if (await tab.elementExists('a[class^="banner_continue-"]')) {
      await tab.clickElement('a[class^="banner_continue-"]');
    }
    if (await tab.elementExists('span[class^="banner_consent-"')) {
      await tab.clickElement('span[class^="banner_consent-"');
    }
    return true;
  }
}
