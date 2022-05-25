import { isElementVisible, waitFor } from "../utils";
import AutoConsentCMPBase from "./base";

// Note: JS API is also available:
// https://help.consentmanager.net/books/cmp/page/javascript-api
export default class ConsentManager extends AutoConsentCMPBase {

  prehideSelectors = ["#cmpbox,#cmpbox2"]

  get hasSelfTest(): boolean {
    return false;
  }

  get isIntermediate(): boolean {
    return false;
  }

  constructor() {
    super("consentmanager.net");
  }

  async detectCmp() {
    return !!document.querySelector("#cmpbox");
  }

  async detectPopup() {
    const popupElements = document.querySelectorAll("#cmpbox .cmpmore");
    return Array.from(popupElements).some(isElementVisible);
  }

  async optOut() {
    const but: HTMLElement = document.querySelector(".cmpboxbtnno");
    if (but) {
      but.click();
      return true;
    }

    if (document.querySelector(".cmpwelcomeprpsbtn")) {
      const toggles = document.querySelectorAll(".cmpwelcomeprpsbtn > a[aria-checked=true]");
      toggles.forEach((el: HTMLElement) => el.click());
      const saveButton: HTMLElement = document.querySelector(".cmpboxbtnsave");
      saveButton.click();
      return true;
    }

    const customBtn: HTMLElement = document.querySelector(".cmpboxbtncustom");
    customBtn.click();
    await waitFor(() => !!document.querySelector(".cmptblbox"), 10, 200);
    const checkboxes = document.querySelectorAll(".cmptdchoice > a[aria-checked=true]");
    checkboxes.forEach((el: HTMLElement) => el.click());
    const saveButton: HTMLElement = document.querySelector(".cmpboxbtnyescustomchoices");
    saveButton.click();
    return true;
  }

  async optIn() {
    const acceptButton: HTMLElement = document.querySelector(".cmpboxbtnyes");
    if (acceptButton) {
      acceptButton.click();
      return true;
    }
    return false;
  }
}
