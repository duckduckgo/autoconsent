import AutoConsentBase from './base';

export default class Cookiebot extends AutoConsentBase {
  constructor() {
    super('Cybotcookiebot');
  }

  async detectCmp(tab) {
    try {
      return await tab.eval('typeof window.CookieConsent === "object"');
    } catch (e) {
      return false;
    }
  }

  detectPopup(tab) {
    return tab.elementExists('#CybotCookiebotDialog,#dtcookie-container,#cookiebanner');
  }

  async optOut(tab) {
    if (await tab.elementExists('#dtcookie-container')) {
      return tab.clickElement('.h-dtcookie-decline');
    }
    if (await tab.elementExists('.cookiebot__button--settings')) {
      await tab.clickElement('.cookiebot__button--settings');
    }
    if (await tab.elementsAreVisible('#CybotCookiebotDialogBodyButtonDecline', 'all')) {
      return await tab.clickElement('#CybotCookiebotDialogBodyButtonDecline');
    }
    await tab.clickElements('.CybotCookiebotDialogBodyLevelButton:checked:enabled,input[id*="CybotCookiebotDialogBodyLevelButton"]:checked:enabled');
    if (await tab.elementExists('#CybotCookiebotDialogBodyButtonDecline')) {
      await tab.clickElement('#CybotCookiebotDialogBodyButtonDecline');
    }
    await tab.clickElements('#CybotCookiebotDialogBodyLevelButtonAccept,#CybotCookiebotDialogBodyButtonAccept');
    // await tab.clickElement('#CybotCookiebotDialogBodyButtonAccept');
    return true;
  }

  async optIn(tab) {
    if (await tab.elementExists('#dtcookie-container')) {
      return tab.clickElement('.h-dtcookie-accept');
    }
    await tab.clickElements('.CybotCookiebotDialogBodyLevelButton:not(:checked):enabled');
    await tab.clickElement('#CybotCookiebotDialogBodyLevelButtonAccept');
    await tab.clickElement('#CybotCookiebotDialogBodyButtonAccept');
    return true;
  }

  async openCmp(tab) {
    await tab.eval('CookieConsent.renew() || true');
    return tab.waitForElement('#CybotCookiebotDialog', 10000);
  }

  async test(tab) {
    return tab.eval('CookieConsent.declined === true');
  }
}
