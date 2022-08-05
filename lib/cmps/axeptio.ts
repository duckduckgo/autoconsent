
import { click, doEval, elementExists, elementVisible, wait, waitForElement } from "../rule-executors";
import { waitFor } from "../utils";
import AutoConsentCMPBase from "./base";

export default class Axeptio extends AutoConsentCMPBase {

  prehideSelectors = [".Elements__Content-sc-xuz5b0-2, .axeptio_widget, #axeptio_overlay, .ax-widget, .ax-widget-container, .Widget__WidgetStyle-sc-zhn46e-1, .hmRIgy"]

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
    return elementExists(".ax-widget-container");
  }

  async detectPopup() {
    return elementVisible(".ax-widget-container", 'all');
  }

  async optOut() {

    click("button#axeptio_btn_dismiss");


    // popup doesn't disappear immediately
    await waitFor(
      () => elementVisible(".ax-widget-container", 'none'),
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