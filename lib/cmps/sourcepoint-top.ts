import { requestEval } from "../eval-handler";
import { isElementVisible } from "../utils";
import AutoConsentCMPBase from "./base";

export default class SourcePoint extends AutoConsentCMPBase {
  prehideSelectors = ["div[id^='sp_message_container_'],.message-overlay"]

  constructor() {
    super("Sourcepoint-top");
  }

  get hasSelfTest(): boolean {
    return true;
  }

  get isIntermediate(): boolean {
    return true;
  }

  async detectCmp() {
    return !!document.querySelector("div[id^='sp_message_container_']");
  }

  async detectPopup() {
    const popupElements = document.querySelectorAll("div[id^='sp_message_container_']");
    return Array.from(popupElements).every(isElementVisible);
  }

  async optIn() {
    return true;
  }

  async optOut() {
    return true;
  }

  async test() {
    await requestEval("__tcfapi('getTCData', 2, r => window.__rcsResult = r)");
    return await requestEval(
      "Object.values(window.__rcsResult.purpose.consents).every(c => !c)"
    );
  }
}
