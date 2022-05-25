import { requestEval } from "../eval-handler";
import { isElementVisible, waitFor, waitMs } from "../utils";
import AutoConsentCMPBase from "./base";

export default class Onetrust extends AutoConsentCMPBase {

  prehideSelectors = ["#onetrust-banner-sdk,#onetrust-consent-sdk,.optanon-alert-box-wrapper,.onetrust-pc-dark-filter,.js-consent-banner"]

  constructor() {
    super("Onetrust");
  }

  get hasSelfTest(): boolean {
    return true;
  }

  get isIntermediate(): boolean {
    return false;
  }

  async detectCmp() {
    return !!document.querySelector("#onetrust-banner-sdk,.optanon-alert-box-wrapper");
  }

  async detectPopup() {
    const popupElements = document.querySelectorAll("#onetrust-banner-sdk,.optanon-alert-box-wrapper");
    return Array.from(popupElements).every(isElementVisible);
  }

  async optOut() {
    const showPurposesButton: HTMLElement = document.querySelector("#onetrust-pc-btn-handler"); // "show purposes" button inside a popup
    if (showPurposesButton) {
      showPurposesButton.click();
    } else { // otherwise look for a generic "show settings" button
      const settingsButton: HTMLElement = document.querySelector(".ot-sdk-show-settings,button.js-cookie-settings");
      settingsButton.click();
    }

    await waitFor(() => !!document.querySelector('#onetrust-consent-sdk'), 10, 200);
    await waitMs(1000);
    const toggles = document.querySelectorAll("#onetrust-consent-sdk input.category-switch-handler:checked,.js-editor-toggle-state:checked");
    toggles.forEach((e: HTMLElement) => e.click()); // optional step

    await waitFor(() => !!document.querySelector(".save-preference-btn-handler,.js-consent-save"), 10, 200);
    const saveButton: HTMLElement = document.querySelector(".save-preference-btn-handler,.js-consent-save");
    saveButton.click();

    // popup doesn't disappear immediately
    await waitFor(
      () => !(Array.from(document.querySelectorAll("#onetrust-banner-sdk")).every(isElementVisible)),
      10,
      500
    );
    return true;
  }

  async optIn() {
    const acceptButton: HTMLElement = document.querySelector("onetrust-accept-btn-handler,js-accept-cookies");
    acceptButton.click();
    return true;
  }

  async test() {
    return await requestEval("window.OnetrustActiveGroups.split(',').filter(s => s.length > 0).length <= 1");
  }
}
