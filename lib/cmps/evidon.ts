import { getStyleElement, hideElements, isElementVisible, waitFor } from "../utils";
import AutoConsentCMPBase from "./base";

export default class Evidon extends AutoConsentCMPBase {
  constructor() {
    super("Evidon");
  }

  get hasSelfTest(): boolean {
    return false;
  }

  get isIntermediate(): boolean {
    return false;
  }

  async detectCmp() {
    return !!document.querySelector("#_evidon_banner");
  }

  async detectPopup() {
    const popup: HTMLElement = document.querySelector("#_evidon_banner");
    return isElementVisible(popup);
  }

  async optOut() {
    const declineButton: HTMLElement = document.querySelector("#_evidon-decline-button");
    if (declineButton) {
      declineButton.click();
      return true;
    }
    hideElements(getStyleElement(), ["#evidon-prefdiag-overlay", "#evidon-prefdiag-background"]);
    const optionButton: HTMLElement = document.querySelector("#_evidon-option-button");
    optionButton.click();

    await waitFor(() => !!document.querySelector("#evidon-prefdiag-overlay"), 10, 500);

    const declineButton2: HTMLElement = document.querySelector("#evidon-prefdiag-decline");
    declineButton2.click();
    return true;
  }

  async optIn() {
    const acceptButton: HTMLElement = document.querySelector("#_evidon-accept-button");
    acceptButton.click();
    return true;
  }
}
