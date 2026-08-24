import { RunContext } from '../rules';
import { waitFor } from '../utils';
import AutoConsentCMPBase from './base';

const ACCEPT_BUTTONS = '.sp_choice_type_11,.sp_choice_type_ACCEPT_ALL,.sp_choice_type_Accept';
// Explicit sp_choice_type_12 or generic [data-choice] links that aren't accept buttons.
const MANAGE_BUTTONS = '.sp_choice_type_12,[data-choice]:not([class*="sp_choice_type_"])';

export default class SourcePoint extends AutoConsentCMPBase {
    name = 'Sourcepoint-frame';
    prehideSelectors = ["div[id^='sp_message_container_'],.message-overlay", '#sp_privacy_manager_container'];

    ccpaNotice = false;
    ccpaPopup = false;

    runContext: RunContext = {
        main: true,
        frame: true,
    };

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
        return (
            (url.pathname === '/index.html' ||
                url.pathname === '/privacy-manager/index.html' ||
                url.pathname === '/ccpa_pm/index.html' ||
                url.pathname === '/us_pm/index.html') &&
            (url.searchParams.has('message_id') || url.searchParams.has('requestUUID') || url.searchParams.has('consentUUID'))
        );
    }

    async detectPopup() {
        if (this.ccpaNotice) {
            return true;
        }
        if (this.ccpaPopup) {
            return await this.waitForElement('.priv-save-btn', 2000);
        }
        // check for the paywall button, and bail if it exists to prevent broken opt out
        await this.waitForElement(`${ACCEPT_BUTTONS},.sp_choice_type_12,.sp_choice_type_13,.sp_choice_type_SAVE_AND_EXIT,.pm-us`, 2000);
        return !this.elementExists('.sp_choice_type_9');
    }

    async optIn() {
        await this.waitForElement(ACCEPT_BUTTONS, 2000);
        for (const selector of ['.sp_choice_type_11', '.sp_choice_type_ACCEPT_ALL', '.sp_choice_type_Accept']) {
            if (await this.click(selector)) {
                return true;
            }
        }
        return false;
    }

    isManagerOpen() {
        if (location.pathname === '/privacy-manager/index.html' || location.pathname === '/ccpa_pm/index.html') {
            return true;
        }
        // US National PM is served at /us_pm/index.html, same as the initial notice.
        // Distinguish the manager from the notice by the absence of the accept/continue button.
        if (location.pathname === '/us_pm/index.html' && !this.elementExists(ACCEPT_BUTTONS)) {
            return true;
        }
        return false;
    }

    // The US National notice opens its privacy manager in a sibling frame, so this frame
    // cannot see the manager and must stop after clicking through.
    isUsNatNotice(): boolean {
        return location.pathname === '/us_pm/index.html' && this.elementExists(ACCEPT_BUTTONS);
    }

    // The US National manager renders "Off/On" toggles whose polarity depends on the label:
    // "do not sell"-style toggles must be turned on, permission-style toggles turned off.
    async optOutUsNatManager(): Promise<boolean> {
        await this.waitForElement('.pm-us .pm-toggle', 2000);
        const toggles = Array.from(document.querySelectorAll('.pm-us .pm-toggle') as NodeListOf<HTMLElement>).map((toggle) => {
            const label = toggle.getAttribute('aria-label') || toggle.closest('.switch-container')?.textContent || '';
            return { toggle, expectedState: /\bdo not\b|\bdon'?t\b|\bopt[-\s]?out\b/i.test(label) };
        });
        const isSettled = () =>
            toggles.every(({ toggle, expectedState }) => (toggle.getAttribute('aria-checked') === 'true') === expectedState);
        for (const { toggle, expectedState } of toggles) {
            if ((toggle.getAttribute('aria-checked') === 'true') !== expectedState) {
                // the click handler sits on the inner "Off"/"On" labels, not on the button itself
                toggle.querySelector<HTMLElement>(expectedState ? '.on' : '.off')?.click();
            }
        }
        await waitFor(isSettled, 10, 100);

        // Some sites customize the save button and drop its sp_choice_type_ class.
        for (const selector of [
            '.sp_choice_type_SE',
            '.sp_choice_type_SAVE_AND_EXIT',
            '.bottom-row .message-button:not([class*="sp_choice_type_"])',
        ]) {
            if (await this.click(selector)) {
                return true;
            }
        }
        return false;
    }

    async optOut() {
        // FIXME: ideally we want to wait until the outer frame is ready, but it's tricky in cross-origin frames
        await this.wait(500);

        const logsConfig = this.autoconsent.config.logs;
        if (this.ccpaPopup) {
            // toggles with 2 buttons
            const toggles = document.querySelectorAll(
                '.priv-purpose-container .sp-switch-arrow-block a.neutral.on .right',
            ) as NodeListOf<HTMLElement>;
            for (const t of toggles) {
                t.click();
            }
            // switch toggles
            const switches = document.querySelectorAll(
                '.priv-purpose-container .sp-switch-arrow-block a.switch-bg.on',
            ) as NodeListOf<HTMLElement>;
            for (const t of switches) {
                t.click();
            }
            return await this.click('.priv-save-btn');
        }

        if (this.elementExists('.pm-us')) {
            return await this.optOutUsNatManager();
        }

        if (this.isUsNatNotice()) {
            if (this.elementVisible('.sp_choice_type_13', 'any')) {
                return await this.click('.sp_choice_type_13');
            }
            return await this.click(MANAGE_BUTTONS);
        }

        // sometimes there's a "Save and Exit" / "Essential cookies" button
        if (this.elementVisible('.sp_choice_type_SE', 'any')) {
            // click the "Do Not Sell" toggle if it exists
            await this.click(
                [
                    "xpath///div[contains(., 'Do not share my personal information') and contains(@class, 'switch-container')]",
                    '.pm-switch[aria-checked=false] .slider',
                ],
                false,
            );
            return await this.click('.sp_choice_type_SE');
        }

        if (!this.isManagerOpen()) {
            const actionable = await this.waitForVisible(`${MANAGE_BUTTONS},.sp_choice_type_13`);
            if (!actionable) {
                return false;
            }

            // If a one-click reject button (sp_choice_type_13) is visible on the notice,
            // prefer it over opening the manage flow. This avoids picking the wrong
            // element when multiple sp_choice_type_12 buttons coexist (e.g. an
            // informational link alongside a "Manage settings" button), and also covers
            // the CCPA "do not sell" case where sp_choice_type_13 is the only action.
            if (this.elementVisible('.sp_choice_type_13', 'any')) {
                return await this.click('.sp_choice_type_13');
            }

            await this.click(MANAGE_BUTTONS);
            // the page may navigate at this point but that's okay
            await waitFor(() => this.isManagerOpen(), 200, 100);
        }

        await this.waitForElement('.type-modal', 20000);
        if (this.elementExists('[role=tablist]')) {
            await this.waitForElement('[role=tablist] [role=tab]', 10000);
        }

        // check "Do Not Sell" (CCPA) toggle if it exists
        this.waitForThenClick('.ccpa-stack .pm-switch[aria-checked=true] .slider', 500, true); // the UI is reversed: "unchecked" switch displays as an enabled toggle

        // reject all button is offered by some sites
        try {
            const rejectSelector1 = '.sp_choice_type_REJECT_ALL';
            const rejectSelector2 = '.reject-toggle';
            const path = await Promise.race([
                this.waitForElement(rejectSelector1, 2000).then((success) => (success ? 0 : -1)),
                this.waitForElement(rejectSelector2, 2000).then((success) => (success ? 1 : -1)),
                this.waitForElement('.pm-features', 2000).then((success) => (success ? 2 : -1)),
            ]);

            if (path === 0) {
                await this.waitForVisible(rejectSelector1);
                return await this.click(rejectSelector1);
            } else if (path === 1) {
                await this.click(rejectSelector2);
            } else if (path === 2) {
                await this.waitForElement('.pm-features', 10000);
                await this.click('.checked > span', true);
                await this.click('.chevron');
            }
        } catch (e) {
            logsConfig.errors && console.warn(e);
        }
        // TODO: race condition: if the reject button was clicked, the popup disappears very quickly, so the background script may not receive a success report.
        return await this.click('.sp_choice_type_SAVE_AND_EXIT');
    }
}
