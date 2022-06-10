import { enableLogs } from "../config";
import { waitFor, waitMs } from "../utils";
import AutoConsentCMPBase from "./base";

export default class SourcePoint extends AutoConsentCMPBase {

  ccpaMode = false;

  constructor() {
    super("Sourcepoint-frame");
  }

  get hasSelfTest(): boolean {
    return false; // self-test is done by parent frame
  }

  get isIntermediate(): boolean {
    return false;
  }

  async detectCmp() {
    const url = new URL(location.href);
    if (url.searchParams.has('message_id') && url.hostname === 'ccpa-notice.sp-prod.net') {
      this.ccpaMode = true;
      return true;
    }
    return (url.pathname === '/index.html' || url.pathname === '/privacy-manager/index.html')
        && url.searchParams.has('message_id') && url.searchParams.has('requestUUID');
  }

  async detectPopup() {
    return true;
  }

  async optIn() {
    const acceptButton: HTMLElement = document.querySelector(".sp_choice_type_11");
    if (acceptButton) {
      acceptButton.click();
      return true;
    }

    const acceptButton2: HTMLElement = document.querySelector('.sp_choice_type_ACCEPT_ALL');
    if (acceptButton2) {
      acceptButton2.click();
    }
    return true;
  }

  isManagerOpen() {
    return (new URL(location.href)).pathname === "/privacy-manager/index.html";
  }

  async optOut() {
    if (!this.isManagerOpen()) {
      const settingsButton: HTMLElement = document.querySelector("button.sp_choice_type_12");
      if (!settingsButton) {
        // do not sell button
        const declineAllButton: HTMLElement = document.querySelector("button.sp_choice_type_13");
        declineAllButton.click();
        return true;
      }
      settingsButton.click();
      await waitFor(
        () => location.pathname === "/privacy-manager/index.html",
        200,
        100
      );
    }

    await waitFor(
      () => !!document.querySelector('.type-modal'),
      200,
      100
    );
    // reject all button is offered by some sites
    try {
      const rejectSelector1 = '.sp_choice_type_REJECT_ALL';
      const rejectSelector2 = '.reject-toggle';
      const path = await Promise.race([
        waitFor(() => !!document.querySelector(rejectSelector1), 10, 200).then(success => success ? 0: -1),
        waitFor(() => !!document.querySelector(rejectSelector2), 10, 200).then(success => success ? 1: -1),
        waitFor(() => !!document.querySelector('.pm-features'), 10, 200).then(success => success ? 2: -1),
      ]);
      if (path === 0) {
        await waitMs(1000);
        const rejectAllButton: HTMLElement = document.querySelector(rejectSelector1);
        rejectAllButton.click();
        return true;
      } else if (path === 1) {
        const rejectToggle: HTMLElement = document.querySelector(rejectSelector2);
        rejectToggle.click();
      } else if (path === 2) {
        // TODO: check if this is still working
        await waitFor(() => !!document.querySelector('.pm-features'), 50, 200);
        const toggles = document.querySelectorAll('.checked > span');
        toggles.forEach((t: HTMLElement) => t.click());

        const chevron: HTMLElement = document.querySelector('.chevron');
        if (chevron) {
          chevron.click();
        }
      }
    } catch (e) {
      enableLogs && console.warn(e);
    }
    const saveButton: HTMLElement = document.querySelector('.sp_choice_type_SAVE_AND_EXIT');
    saveButton.click();
    return true;
  }
}
