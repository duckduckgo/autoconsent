import AutoConsentBase from './base';

export default class TheGuardian extends AutoConsentBase {
  constructor() {
    super('theguardian');
  }

  detectCmp(tab) {
    return new URL(tab.url).hostname.endsWith('theguardian.com');
  }

  detectPopup(tab) {
    return tab.elementExists('.site-message--first-pv-consent__link');
  }

  async optOut(tab) {
    const originalUrl = tab.url;
    await tab.clickElement('.site-message--first-pv-consent__link');
    await tab.waitForElement('#gu-ad-prefs-false-GU_TK', 10000);
    await tab.clickElement('#gu-ad-prefs-false-GU_TK');
    await tab.clickElement('.manage-account__button');
    await new Promise(resolve => setTimeout(resolve, 200));
    await tab.goto(originalUrl);
    return true;
  }

  async optIn(tab) {
    const originalUrl = tab.url;
    await tab.clickElement('.site-message--first-pv-consent__link');
    await tab.waitForElement('#gu-ad-prefs-true-GU_TK', 10000);
    await tab.clickElement('#gu-ad-prefs-true-GU_TK');
    await tab.clickElement('.manage-account__button');
    await new Promise(resolve => setTimeout(resolve, 200));
    await tab.goto(originalUrl);
    return true;
  }

  async openCmp(tab) {
    await tab.goto('https://profile.theguardian.com/privacy-settings');
    return true;
  }

  async test(tab) {
    await tab.eval('__cmp(\'getVendorConsents\', undefined, r => window.__rcsResult = r)');
    return tab.eval('Object.values(window.__rcsResult.purposeConsents).every(c => !c)');
  }
}
