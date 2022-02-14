import AutoConsentBase from './base';
import { TabActor } from '../types';

export default class Cookiebot extends AutoConsentBase {

  prehideSelectors = ["#CybotCookiebotDialog,#dtcookie-container,#cookiebanner"]

  constructor() {
    super('Cybotcookiebot');
  }

  async detectCmp(tab: TabActor) {
    try {
      return await tab.eval('typeof window.CookieConsent === "object" && typeof window.CookieConsent.name === "string"');
    } catch (e) {
      return false;
    }
  }

  detectPopup(tab: TabActor) {
    return tab.elementExists('#CybotCookiebotDialog,#dtcookie-container,#cookiebanner');
  }

  async optOut(tab: TabActor) {
    if (await tab.elementExists('.cookie-alert-extended-detail-link')) {
      await tab.clickElement('.cookie-alert-extended-detail-link');
      await tab.waitForElement('.cookie-alert-configuration', 1000);
      await tab.clickElements('.cookie-alert-configuration-input:checked');
      return tab.clickElement('.cookie-alert-extended-button-secondary');
    }
    if (await tab.elementExists('#dtcookie-container')) {
      return tab.clickElement('.h-dtcookie-decline');
    }
    if (await tab.elementExists('.cookiebot__button--settings')) {
      await tab.clickElement('.cookiebot__button--settings');
    }
    if (await tab.elementsAreVisible('#CybotCookiebotDialogBodyButtonDecline', 'all')) {
      return await tab.clickElement('#CybotCookiebotDialogBodyButtonDecline');
    }
    if (await tab.elementExists('.cookiebanner__link--details')) {
      await tab.clickElement('.cookiebanner__link--details')
    }
    await tab.clickElements('.CybotCookiebotDialogBodyLevelButton:checked:enabled,input[id*="CybotCookiebotDialogBodyLevelButton"]:checked:enabled');
    if (await tab.elementExists('#CybotCookiebotDialogBodyButtonDecline')) {
      await tab.clickElement('#CybotCookiebotDialogBodyButtonDecline');
    }
    if (await tab.elementExists('input[id^=CybotCookiebotDialogBodyLevelButton]:checked')) {
      await tab.clickElements('input[id^=CybotCookiebotDialogBodyLevelButton]:checked')
    }
    if (await tab.elementExists('#CybotCookiebotDialogBodyButtonAcceptSelected')) {
      await tab.clickElement('#CybotCookiebotDialogBodyButtonAcceptSelected');
    } else {
      await tab.clickElements('#CybotCookiebotDialogBodyLevelButtonAccept,#CybotCookiebotDialogBodyButtonAccept,#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
    }
    // some sites have custom submit buttons with no obvious selectors. In this case we just call the submitConsent API.
    if (await tab.eval('CookieConsent.hasResponse !== true')) {
      await tab.eval('Cookiebot.dialog.submitConsent() || true');
      await tab.wait(500);
    }
    return true;
  }

  async optIn(tab: TabActor) {
    if (await tab.elementExists('#dtcookie-container')) {
      return tab.clickElement('.h-dtcookie-accept');
    }
    await tab.clickElements('.CybotCookiebotDialogBodyLevelButton:not(:checked):enabled');
    await tab.clickElement('#CybotCookiebotDialogBodyLevelButtonAccept');
    await tab.clickElement('#CybotCookiebotDialogBodyButtonAccept');
    return true;
  }

  async openCmp(tab: TabActor) {
    await tab.eval('CookieConsent.renew() || true');
    return tab.waitForElement('#CybotCookiebotDialog', 10000);
  }

  async test(tab: TabActor) {
    return tab.eval('CookieConsent.declined === true');
  }
}
