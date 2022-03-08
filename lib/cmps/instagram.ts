import AutoConsentBase, { waitFor } from "./base";
import { TabActor } from "../types";

// translations for optout button text
const buttonText = [
    "Only allow essential cookies",
    "Nur erforderliche Cookies erlauben",
    "Permitir solo cookies imprescindibles"
].join('|');

const promptText = [
    "Allow the use of cookies",
    "Die Verwendung von Cookies",
    "Permitir el uso de cookies"
].join('|')

export default class Instagram extends AutoConsentBase {
  constructor() {
    super("Instagram");
  }

  async detectCmp(tab: TabActor) {
      await waitFor(() => tab.eval("document.readyState === 'complete'"), 40, 50);
      return tab.eval(`!!document.querySelector('div > h2').innerText.match('${promptText}')`)
  }

  async detectPopup(tab: TabActor) {
      return true
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
    // TODO
    return true;
  }
}
