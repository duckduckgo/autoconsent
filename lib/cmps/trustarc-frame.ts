import { isElementVisible, waitFor } from "../utils";
import AutoConsentCMPBase from "./base";

export default class TrustArcFrame extends AutoConsentCMPBase {
  constructor() {
    super("TrustArc-frame");
  }

  get hasSelfTest(): boolean {
    return false;
  }

  get isIntermediate(): boolean {
    return false;
  }

  async detectCmp() {
    return window.top !== window && location.href.startsWith("https://consent-pref.trustarc.com/?");
  }

  async detectPopup() {
    // we're already inside the popup
    return !!document.querySelector("#defaultpreferencemanager") && !!document.querySelector(".mainContent");
  }

  async navigateToSettings() {
    // wait for it to load
    await waitFor(
      async () => {
        return (
          !!document.querySelector(".shp") ||
          isElementVisible(document.querySelector(".advance")) ||
          !!document.querySelector(".switch span:first-child")
        );
      },
      10,
      500
    );
    // splash screen -> hit more information
    const shp = document.querySelector(".shp") as HTMLElement;
    if (shp) {
      shp.click();
    }

    await waitFor(
      async () => !!document.querySelector(".prefPanel"),
      10,
      500
    );

    // go to advanced settings if not yet shown
    const advance = document.querySelector(".advance") as HTMLElement;
    if (advance && isElementVisible(advance)) {
      advance.click();
    }

    // takes a while to load the opt-in/opt-out buttons
    return await waitFor(
      () => isElementVisible(document.querySelector(".switch span:first-child")),
      5,
      1000
    );
  }

  async optOut() {
    await waitFor(() => document.readyState === 'complete', 20, 100);

    const rejectAll = document.querySelector(".rejectAll") as HTMLElement;
    if (rejectAll) {
      rejectAll.click();
      return true;
    }

    const catDetails = document.querySelector("#catDetails0") as HTMLElement;
    if (catDetails) {
      catDetails.click();
      const submitButton = document.querySelector(".submit") as HTMLElement;
      submitButton.click();
      return true;
    }

    const requiredButton = document.querySelector(".required") as HTMLElement;
    if (requiredButton) {
      requiredButton.click();
      return true;
    }

    await this.navigateToSettings();

    const toggles = document.querySelectorAll(".switch span:nth-child(1):not(.active)");
    toggles.forEach((toggle: HTMLElement) => {
      toggle.click();
    });

    const submitButton = document.querySelector(".submit") as HTMLElement;
    submitButton.click();

    // at this point, iframe usually closes. Sometimes we need to close manually, but we don't wait for it to report success
    waitFor(
      async () => !!document.querySelector("#gwt-debug-close_id"),
      300,
      1000
    ).then(() => {
      const closeButton = document.querySelector("#gwt-debug-close_id") as HTMLElement;
      closeButton && closeButton.click();
    });

    return true;
  }

  async optIn() {
    await this.navigateToSettings();
    const toggles = document.querySelectorAll(".switch span:nth-child(2)");
    toggles.forEach((toggle: HTMLElement) => {
      toggle.click();
    });

    const submitButton = document.querySelector(".submit") as HTMLElement;
    submitButton.click();

    await waitFor(
      async () => !!document.querySelector("#gwt-debug-close_id"),
      300,
      1000
    );
    const closeButton = document.querySelector("#gwt-debug-close_id") as HTMLElement;
    closeButton && closeButton.click();

    return true;
  }
}
