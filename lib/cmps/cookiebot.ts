import { waitFor, waitMs } from '../utils';
import AutoConsentCMPBase from './base';

export default class Cookiebot extends AutoConsentCMPBase {

  prehideSelectors = ["#CybotCookiebotDialog,#dtcookie-container,#cookiebanner"]

  constructor() {
    super('Cybotcookiebot');
  }

  get hasSelfTest(): boolean {
    return true;
  }

  get isIntermediate(): boolean {
    return false;
  }

  async detectCmp() {
    return typeof (<any>window).CookieConsent === "object" && typeof (<any>window).CookieConsent.name === "string"
  }

  async detectPopup() {
    return !!document.querySelector('#CybotCookiebotDialog,#dtcookie-container,#cookiebanner');
  }

  async optOut() {
    const detailLink = document.querySelector('.cookie-alert-extended-detail-link') as HTMLElement;
    if (detailLink) {
      detailLink.click();
      await waitFor(async () => !!document.querySelector('.cookie-alert-configuration'), 10, 200);
      document.querySelectorAll('.cookie-alert-configuration-input:checked').forEach((el: HTMLElement) => {
        el.click();
      });
      (<HTMLElement>document.querySelector('.cookie-alert-extended-button-secondary')).click();
      return true;
    }

    const cookieContainer = document.querySelector('#dtcookie-container') as HTMLElement;
    if (cookieContainer) {
      (<HTMLElement>document.querySelector('.h-dtcookie-decline')).click();
      return true;
    }

    const settingsButton = document.querySelector('.cookiebot__button--settings') as HTMLElement;
    if (settingsButton) {
      settingsButton.click();
    }

    const declineButton = document.querySelector('#CybotCookiebotDialogBodyButtonDecline') as HTMLElement;
    if (declineButton) {
      declineButton.click();
      return true;
    }

    const detailsLink = document.querySelector('.cookiebanner__link--details') as HTMLElement;
    if (detailsLink) {
      detailsLink.click();
    }

    document.querySelectorAll('.CybotCookiebotDialogBodyLevelButton:checked:enabled,input[id*="CybotCookiebotDialogBodyLevelButton"]:checked:enabled').forEach((el: HTMLElement) => {
      el.click();
    });
    const declineButton2 = document.querySelector('#CybotCookiebotDialogBodyButtonDecline') as HTMLElement;
    if (declineButton2) {
      declineButton2.click();
    }
    document.querySelectorAll('input[id^=CybotCookiebotDialogBodyLevelButton]:checked').forEach((el: HTMLElement) => {
      el.click();
    });

    const acceptButton = document.querySelector('#CybotCookiebotDialogBodyButtonAcceptSelected') as HTMLElement;
    if (acceptButton) {
      acceptButton.click();
    } else {
      document.querySelectorAll(
        '#CybotCookiebotDialogBodyLevelButtonAccept,#CybotCookiebotDialogBodyButtonAccept,#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection'
      ).forEach((el: HTMLElement) => {
        el.click();
      });
    }

    // some sites have custom submit buttons with no obvious selectors. In this case we just call the submitConsent API.
    if ((<any>window).CookieConsent.hasResponse !== true) {
      (<any>window).Cookiebot.dialog.submitConsent();
      waitMs(500);
    }
    return true;
  }

  async optIn() {
    const cookieContainer = document.querySelector('#dtcookie-container') as HTMLElement;
    if (cookieContainer) {
      (<HTMLElement>document.querySelector('.h-dtcookie-accept')).click();
      return true;
    }

    document.querySelectorAll('.CybotCookiebotDialogBodyLevelButton:not(:checked):enabled').forEach((el: HTMLElement) => {
      el.click();
    });
    (<HTMLElement>document.querySelector('#CybotCookiebotDialogBodyLevelButtonAccept')).click();
    (<HTMLElement>document.querySelector('#CybotCookiebotDialogBodyButtonAccept')).click();
    return true;
  }

  async openCmp() {
    (<any>window).CookieConsent.renew();
    return waitFor(async () => !!document.querySelector('#CybotCookiebotDialog'), 20, 500);
  }

  async test() {
    return (<any>window).CookieConsent.declined === true;
  }
}
