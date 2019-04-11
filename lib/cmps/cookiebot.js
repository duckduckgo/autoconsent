import AutoConsentBase from './base';

export default class Cookiebot extends AutoConsentBase {
  constructor() {
    super('Cybotcookiebot');
  }

  detectCmp(tab) {
    return tab.eval('window.CookieConsent !== undefined');
  }

  detectPopup(tab) {
    return tab.elementExists('#CybotCookiebotDialog');
  }

  async optOut(tab) {
    await tab.clickElements('.CybotCookiebotDialogBodyLevelButton:checked:enabled');
    if (await tab.elementExists('#CybotCookiebotDialogBodyButtonDecline')) {
      await tab.clickElement('#CybotCookiebotDialogBodyButtonDecline');
    }
    await tab.clickElement('#CybotCookiebotDialogBodyLevelButtonAccept');
    // await tab.clickElement('#CybotCookiebotDialogBodyButtonAccept');
    return true;
  }

  async optIn(tab) {
    await tab.clickElements('.CybotCookiebotDialogBodyLevelButton:not(:checked):enabled');
    await tab.clickElement('#CybotCookiebotDialogBodyLevelButtonAccept');
    await tab.clickElement('#CybotCookiebotDialogBodyButtonAccept');
    return true;
  }

  async openCmp(tab) {
    await tab.eval('CookieConsent.renew() || true');
    return tab.waitForElement('#CybotCookiebotDialog', 10000);
  }
}
