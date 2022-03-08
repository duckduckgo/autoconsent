import AutoConsentBase, { waitFor } from "./base";
import { TabActor } from "../types";

// translations for optout button text
const buttonText = [
    "Only allow essential cookies",
    "Nur erforderliche Cookies erlauben",
    "Permitir solo cookies necesarias"
].join('|');

export default class Facebook extends AutoConsentBase {
  constructor() {
    super("Facebook");
  }

  async detectCmp(tab: TabActor) {
      return await tab.elementExists("#consent_cookies_title");
  }

  async detectPopup(tab: TabActor) {
    return await tab.elementExists("#consent_cookies_title");
  }

  async optOut(tab: TabActor) {
      await tab.eval(`Array.from(document.querySelectorAll('div > button')).filter(el => el.innerText.match('${buttonText}'))[0].click()`)
      return true;
  }

  async optIn(tab: TabActor) {
    return true;
  }

  async openCmp(tab: TabActor) {
    return true;
  }

  async test() {
    // TODO: find out how to test TrustArc
    return true;
  }
}
