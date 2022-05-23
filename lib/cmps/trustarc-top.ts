import { getStyleElement, hideElements, isElementVisible } from "../utils";
import AutoConsentCMPBase from "./base";

const cookieSettingsButton = "#truste-show-consent";
const shortcutOptOut = '#truste-consent-required';
const shortcutOptIn = '#truste-consent-button';
const popupContent = '#truste-consent-content';
const bannerOverlay = '#trustarc-banner-overlay';

export default class TrustArcTop extends AutoConsentCMPBase {

  prehideSelectors = [
    ".trustarc-banner-container",
    ".truste_popframe,.truste_overlay,.truste_box_overlay,#truste-consent-track",
  ]

  _shortcutButton: HTMLElement;

  constructor() {
    super("TrustArc-top");
    this._shortcutButton = null; // indicates if the "reject all" button is detected
  }

  get hasSelfTest(): boolean {
    return false;
  }

  get isIntermediate(): boolean {
    return !this._shortcutButton;
  }

  async detectCmp() {
    const result = document.querySelector(cookieSettingsButton) !== null;
    if (result) {
      // additionally detect the opt-out button
      this._shortcutButton = document.querySelector(shortcutOptOut);
    }
    return result;
  }

  async detectPopup() {
    // not every element should exist, but if it does, it's a popup
    const popupElements = document.querySelectorAll(`${popupContent},${bannerOverlay}`);
    return Array.from(popupElements).every(isElementVisible);
  }

  openFrame() {
    const settingsButtonEl: HTMLElement = document.querySelector(cookieSettingsButton);
    if (settingsButtonEl) {
      settingsButtonEl.click();
    }
  }

  async optOut() {
    if (this._shortcutButton) {
      this._shortcutButton.click();
      return true;
    }

    // hide elements permanently, so user doesn't see the popup
    hideElements(
      getStyleElement(),
      [".truste_popframe", ".truste_overlay", ".truste_box_overlay", "#truste-consent-track"],
    );
    (<HTMLElement>document.querySelector(cookieSettingsButton))?.click();

    // schedule cleanup
    setTimeout(() => {
      getStyleElement().remove();
    }, 10000);

    return true;
  }

  async optIn() {
    const optInButton: HTMLElement = document.querySelector(shortcutOptIn);
    if (optInButton) {

      optInButton.click();
    }

    return true;
  }

  async openCmp() {
    // await tab.eval("truste.eu.clickListener()");
    return true;
  }

  async test() {
    // TODO: find out how to test TrustArc
    return true;
  }
}
