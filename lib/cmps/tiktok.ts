import { enableLogs } from "../config";
import { elementExists } from "../rule-executors";
import { RunContext } from "../rules";
import { isElementVisible } from "../utils";
import AutoConsentCMPBase from "./base";

export default class Tiktok extends AutoConsentCMPBase {
  name = "tiktok.com";

  runContext: RunContext = {
    urlPattern: 'tiktok'
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

  getShadowRoot() {
    const container = document.querySelector('tiktok-cookie-banner');
    if (!container) {
      return null;
    }
    return container.shadowRoot;
  }

  async detectCmp() {
    return elementExists("tiktok-cookie-banner");
  }

  async detectPopup() {
    const banner = this.getShadowRoot().querySelector('.tiktok-cookie-banner') as HTMLElement;
    return isElementVisible(banner);
  }

  async optOut() {
    const declineButton = this.getShadowRoot().querySelector('.button-wrapper button:first-child') as HTMLElement;
    if (declineButton) {
      enableLogs && console.log("[clicking]", declineButton);
      declineButton.click();
      return true;
    } else {
      enableLogs && console.log("no decline button found");
      return false;
    }
  }

  async optIn() {
    const acceptButton = this.getShadowRoot().querySelector('.button-wrapper button:last-child') as HTMLElement;
    if (acceptButton) {
      enableLogs && console.log("[clicking]", acceptButton);
      acceptButton.click();
      return true;
    } else {
      enableLogs && console.log("no accept button found");
      return false;
    }
  }

  async test() {
    const match = document.cookie.match(/cookie-consent=([^;]+)/);
    if (!match) {
      return false;
    }
    const value = JSON.parse(decodeURIComponent(match[1]));
    return Object.values(value).every(x => typeof x !== 'boolean' || x === false);
  }
}
