import { waitFor } from '../utils';
import AutoConsentCMPBase from './base';

export default class Onetrust extends AutoConsentCMPBase {
    name = 'Onetrust';
    prehideSelectors = [
        '#onetrust-banner-sdk,#onetrust-consent-sdk,.onetrust-pc-dark-filter,.js-consent-banner,.optanon-alert-box-wrapper,#optanon-popup-bg,#optanon-popup-wrapper',
    ];

    get hasSelfTest(): boolean {
        return true;
    }

    get isIntermediate(): boolean {
        return false;
    }

    get isCosmetic(): boolean {
        return false;
    }

    async detectCmp() {
        return (
            this.elementExists('#onetrust-banner-sdk,.optanon-alert-box-wrapper,#optanon-menu,.optanon-menu') ||
            this.elementVisible('#onetrust-pc-sdk,#optanon-popup-wrapper', 'any')
        );
    }

    async detectPopup() {
        return this.elementVisible('#onetrust-banner-sdk,#onetrust-pc-sdk,.optanon-alert-box-wrapper,#optanon-popup-wrapper', 'any');
    }

    async optOut() {
        await this.wait(500);
        if (this.elementExists('.optanon-alert-box-wrapper,#optanon-menu,.optanon-menu')) {
            const legacyResult = await this.optOutLegacyOptanon();
            if (legacyResult) {
                return true;
            }
        }

        // 'reject all' shortcuts
        if (this.elementVisible('#onetrust-reject-all-handler', 'any')) {
            return await this.click('#onetrust-reject-all-handler');
        }
        if (this.elementVisible('.ot-pc-refuse-all-handler', 'any')) {
            return await this.click('.ot-pc-refuse-all-handler');
        }
        if (this.elementVisible('.js-reject-cookies', 'any')) {
            return await this.click('.js-reject-cookies');
        }

        if (this.elementVisible('.onetrust-close-btn-handler', 'any')) {
            // Check if this close button is a 'continue without accepting' style button
            // We look for specific keywords that indicate declining/rejecting, not just any text
            // (buttons with text like "Confirm My Choices" or "Save and Accept" should NOT be clicked)
            const closeBtn = document.querySelector<HTMLElement>('.onetrust-close-btn-handler');
            const btnText = closeBtn?.textContent?.toLowerCase() || '';
            const rejectPatterns = ['without', 'ohne', 'sans', 'sin ', 'zonder', 'senza', 'refuse', 'decline', 'reject', 'ablehnen'];
            if (rejectPatterns.some((pattern) => btnText.includes(pattern))) {
                return await this.click('.onetrust-close-btn-handler');
            }

            // CCPA notice-only variant: the banner has the `ot-close-btn-link` class and
            // contains only a Close button (no Accept, Reject, or Settings). There's no
            // real opt-out path in the DOM, so we click Close to dismiss.
            // See e.g. columbia.com (US/CCPA region).
            const banner = document.getElementById('onetrust-banner-sdk');
            const isCloseOnlyNotice =
                banner?.classList.contains('ot-close-btn-link') &&
                !this.elementExists(
                    '#onetrust-accept-btn-handler,#onetrust-reject-all-handler,#onetrust-pc-btn-handler,.ot-sdk-show-settings,button.js-cookie-settings',
                );
            if (isCloseOnlyNotice) {
                return await this.click('.onetrust-close-btn-handler');
            }
        }

        if (this.elementExists('#onetrust-pc-btn-handler')) {
            // "show purposes" button inside a popup
            await this.click('#onetrust-pc-btn-handler');
        } else {
            // otherwise look for a generic "show settings" button
            await this.click('.ot-sdk-show-settings,button.js-cookie-settings');
        }

        await this.waitForElement('#onetrust-consent-sdk', 2000);
        await this.wait(1000); // ideally we want to wait for popup visivility, but it's tricky on e.g. stackoverflow.com
        await this.click('#onetrust-consent-sdk input.category-switch-handler:checked,.js-editor-toggle-state:checked', true); // optional step

        await this.wait(1000); // ideally we want to wait for popup visivility, but it's tricky on e.g. stackoverflow.com
        await this.waitForElement('.save-preference-btn-handler,.js-consent-save', 2000);
        await this.click('.save-preference-btn-handler,.js-consent-save');

        // popup doesn't disappear immediately
        await this.waitForVisible('#onetrust-banner-sdk', 5000, 'none');
        return true;
    }

    async optIn() {
        return await this.click('#onetrust-accept-btn-handler,#accept-recommended-btn-handler,.js-accept-cookies,.optanon-allow-all');
    }

    async test() {
        return await waitFor(() => this.mainWorldEval('EVAL_ONETRUST_1'), 10, 500);
    }

    async optOutLegacyOptanon() {
        if (this.elementVisible('.optanon-reject-all', 'any')) {
            return await this.click('.optanon-reject-all');
        }

        const openSettingsSelector =
            ".optanon-alert-box-wrapper .optanon-toggle-display,a[onclick*='OneTrust.ToggleInfoDisplay()'],a[onclick*='Optanon.ToggleInfoDisplay()'],.optanon-alert-box-wrapper .cookie-settings-button";
        if (!this.elementExists(openSettingsSelector)) {
            return false;
        }

        await this.click(openSettingsSelector);
        await this.waitForVisible('#optanon-popup-wrapper,#optanon-popup-bg', 2000, 'any');

        const tabs = this.getLegacyOptanonOptionalTabs();
        for (const tab of tabs) {
            await this.clickElement(tab);
            await this.wait(200);
            await this.disableVisibleLegacyOptanonToggles();
        }

        await this.disableVisibleLegacyOptanonToggles();
        await this.waitForElement('.optanon-save-settings-button button,.optanon-save-settings-button .optanon-white-button-middle', 2000);
        await this.click('.optanon-save-settings-button button,.optanon-save-settings-button .optanon-white-button-middle');
        await this.waitForVisible('.optanon-alert-box-wrapper', 5000, 'none');
        return true;
    }

    getLegacyOptanonOptionalTabs() {
        const tabSelectors = [
            '#optanon button[role="tab"]',
            '#optanon-menu [class*="menu-item-"]',
            '.optanon-menu [class*="menu-item-"]',
            '#optanon .preference-menu-item',
        ].join(',');
        return Array.from(document.querySelectorAll<HTMLElement>(tabSelectors)).filter(
            (tab) => this.isVisibleElement(tab) && this.isOptionalLegacyOptanonCategory(tab),
        );
    }

    async disableVisibleLegacyOptanonToggles() {
        const checkedInputs = Array.from(
            document.querySelectorAll<HTMLInputElement>(
                '#optanon-popup-body-right input[type="checkbox"]:checked,#optanon input.optanon-status:checked,#optanon input.optanon-status-checkbox:checked',
            ),
        ).filter((input) => !input.disabled && this.isVisibleElement(input));

        for (const input of checkedInputs) {
            await this.clickElement(input);
            await this.wait(100);
        }
    }

    isOptionalLegacyOptanonCategory(element: HTMLElement) {
        const text = element.textContent?.toLowerCase().replace(/\s+/g, ' ').trim() || '';
        if (
            /performance|functional|targeting|advertising|marketing|social|analytics|analytical|measurement|personalisation|personalization|recommended|unclassified|leistung|funktion|analyse|werbung|soziale/.test(
                text,
            )
        ) {
            return true;
        }
        return /\bcookies?\b/.test(text) && !/strictly necessary|necessary|required|privacy|datenschutz|erforderlich|more information|weitere/.test(text);
    }

    isVisibleElement(element: HTMLElement) {
        const style = getComputedStyle(element);
        return style.visibility !== 'hidden' && style.display !== 'none' && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    }
}
