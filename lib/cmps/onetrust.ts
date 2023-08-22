import { click, elementExists, elementVisible, wait, waitForElement } from "../rule-executors";
import { RunContext } from "../rules";
import { waitFor } from "../utils";
import AutoConsentCMPBase from "./base";

export default class Onetrust extends AutoConsentCMPBase {
  name = "Onetrust";
  prehideSelectors = ["#onetrust-banner-sdk,#onetrust-consent-sdk,.onetrust-pc-dark-filter,.js-consent-banner"]

  runContext: RunContext = {
    urlPattern: '^(?!.*https://www\\.nba\\.com/)'
  }

  get hasSelfTest(): boolean {
    return true;
  }

  get isIntermediate(): boolean {
    return false;
  }

  get isCosmetic(): boolean {
    return false;
  }

  async detectCmp() {
    return elementExists("#onetrust-banner-sdk");
  }

  async detectPopup() {
    return elementVisible("#onetrust-banner-sdk", 'all');
  }

  async optOut() {
    if (elementExists("#onetrust-pc-btn-handler")) { // "show purposes" button inside a popup
      click("#onetrust-pc-btn-handler");
    } else { // otherwise look for a generic "show settings" button
      click(".ot-sdk-show-settings,button.js-cookie-settings");
    }

    await waitForElement('#onetrust-consent-sdk', 2000);
    await wait(1000);
    click("#onetrust-consent-sdk input.category-switch-handler:checked,.js-editor-toggle-state:checked", true); // optional step

    await wait(1000);
    await waitForElement(".save-preference-btn-handler,.js-consent-save", 2000);
    click(".save-preference-btn-handler,.js-consent-save");

    // popup doesn't disappear immediately
    await waitFor(
      () => elementVisible("#onetrust-banner-sdk", 'none'),
      10,
      500
    );
    return true;
  }

  async optIn() {
    return click("#onetrust-accept-btn-handler,.js-accept-cookies");
  }

  async test() {
    return await this.mainWorldEval('EVAL_ONETRUST_1');
  }
}
