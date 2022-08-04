import { click, doEval, elementExists, elementVisible, wait, waitForElement } from "../rule-executors";
import { waitFor } from "../utils";
import AutoConsentCMPBase from "./base";

export default class Axeptio extends AutoConsentCMPBase {

  prehideSelectors = [".Elements__Content-sc-xuz5b0-2, .axeptio_widget, .axeptio-widget--open, #axeptio_overlay, .ax-widget, .Widget__WidgetStyle-sc-zhn46e-1, .hmRIgy, .axeptio_mount"]

  constructor() {
    super("Axeptio");
  }

  get hasSelfTest(): boolean {
    return true;
  }

  get isIntermediate(): boolean {
    return false;
  }

  async detectCmp() {
    return elementExists(".axeptio_widget");
  }

  async detectPopup() {
    return elementVisible(".axeptio_widget", 'all');
  }

  async optOut() {
    if (elementExists("button#axeptio_btn_dismiss")) { // "show purposes" button inside a popup
      click("button#axeptio_btn_dismiss");
    } else { // otherwise look for a generic "show settings" button
      click("#axeptio_btn_configure");
    }

    // await waitForElement('.axeptio_widget', 2000);
    // await wait(1000);
    // click("#onetrust-consent-sdk input.category-switch-handler:checked,.js-editor-toggle-state:checked", true); // optional step

    // await waitForElement(".save-preference-btn-handler,.js-consent-save", 2000);
    // click(".save-preference-btn-handler,.js-consent-save");

    // popup doesn't disappear immediately
    await waitFor(
      () => elementVisible(".axeptio_widget", '.Elements__Content-sc-xuz5b0-2', 'none'),
      10,
      500
    );
    return true;
  }

  async optIn() {
    return click("button#axeptio_btn_acceptAll");
  }

//   async test() {
//     return await doEval("window.OnetrustActiveGroups.split(',').filter(s => s.length > 0).length <= 1");
//   }
}
