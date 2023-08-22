import { enableLogs } from "../config";
import { click, elementExists, wait, waitForElement } from "../rule-executors";
import { RunContext } from "../rules";
import { waitFor } from "../utils";
import AutoConsentCMPBase from "./base";

export default class SourcePoint extends AutoConsentCMPBase {
  name = "Sourcepoint-frame";
  prehideSelectors = ["div[id^='sp_message_container_'],.message-overlay",'#sp_privacy_manager_container']

  ccpaNotice = false;
  ccpaPopup = false;

  runContext: RunContext = {
    main: false,
    frame: true,
  }

  get hasSelfTest(): boolean {
    return false; // self-test is done by parent frame
  }

  get isIntermediate(): boolean {
    return false;
  }

  get isCosmetic(): boolean {
    return false;
  }

  async detectCmp() {
    const url = new URL(location.href);
    if (url.searchParams.has('message_id') && url.hostname === 'ccpa-notice.sp-prod.net') {
      this.ccpaNotice = true;
      return true;
    }
    if (url.hostname === 'ccpa-pm.sp-prod.net') {
      this.ccpaPopup = true;
      return true;
    }
    return (url.pathname === '/index.html' || url.pathname === '/privacy-manager/index.html')
        && (url.searchParams.has('message_id') || url.searchParams.has('requestUUID') || url.searchParams.has('consentUUID'));
  }

  async detectPopup() {
    if (this.ccpaNotice) {
      return true;
    }
    if (this.ccpaPopup) {
      return await waitForElement('.priv-save-btn', 2000);
    }
    // check for the paywall button, and bail if it exists to prevent broken opt out
    await waitForElement(".sp_choice_type_11,.sp_choice_type_12,.sp_choice_type_13,.sp_choice_type_ACCEPT_ALL", 2000);
    return !elementExists('.sp_choice_type_9');
  }

  async optIn() {
    await waitForElement(".sp_choice_type_11,.sp_choice_type_ACCEPT_ALL", 2000);
    if (click(".sp_choice_type_11")) {
      return true;
    }

    if (click('.sp_choice_type_ACCEPT_ALL')) {
      return true;
    }
    return false;
  }

  isManagerOpen() {
    return location.pathname === "/privacy-manager/index.html";
  }

  async optOut() {
    if (this.ccpaPopup) {
      // toggles with 2 buttons
      const toggles = document.querySelectorAll('.priv-purpose-container .sp-switch-arrow-block a.neutral.on .right') as NodeListOf<HTMLElement>;
      for (const t of toggles) {
        t.click()
      }
      // switch toggles
      const switches = document.querySelectorAll('.priv-purpose-container .sp-switch-arrow-block a.switch-bg.on') as NodeListOf<HTMLElement>;
      for (const t of switches) {
        t.click()
      }
      return click('.priv-save-btn');
    }
    if (!this.isManagerOpen()) {
      const actionable = await waitForElement('.sp_choice_type_12,.sp_choice_type_13');
      if (!actionable) {
        return false;
      }
      if (!elementExists(".sp_choice_type_12")) {
        // do not sell button
        return click(".sp_choice_type_13");
      }

      click(".sp_choice_type_12");
      // the page may navigate at this point but that's okay
      await waitFor(
        () => this.isManagerOpen(),
        200,
        100
      );
    }

    await waitForElement('.type-modal', 20000);
    // reject all button is offered by some sites
    try {
      const rejectSelector1 = '.sp_choice_type_REJECT_ALL';
      const rejectSelector2 = '.reject-toggle';
      const path = await Promise.race([
        waitForElement(rejectSelector1, 2000).then(success => success ? 0: -1),
        waitForElement(rejectSelector2, 2000).then(success => success ? 1: -1),
        waitForElement('.pm-features', 2000).then(success => success ? 2: -1),
      ]);
      if (path === 0) {
        await wait(1000);
        return click(rejectSelector1);
      } else if (path === 1) {
        click(rejectSelector2);
      } else if (path === 2) {
        await waitForElement('.pm-features', 10000);
        click('.checked > span', true);

        click('.chevron');
      }
    } catch (e) {
      enableLogs && console.warn(e);
    }
    // TODO: race condition: the popup disappears very quickly, so the background script may not receive a success report.
    return click('.sp_choice_type_SAVE_AND_EXIT');
  }
}
