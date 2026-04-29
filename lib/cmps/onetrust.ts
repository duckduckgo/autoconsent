import { waitFor } from '../utils';
import AutoConsentCMPBase from './base';

export default class Onetrust extends AutoConsentCMPBase {
    name = 'Onetrust';
    prehideSelectors = ['#onetrust-banner-sdk,#onetrust-consent-sdk,.onetrust-pc-dark-filter,.js-consent-banner'];

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
        return this.elementExists('#onetrust-banner-sdk,#onetrust-pc-sdk');
    }

    async detectPopup() {
        return this.elementVisible('#onetrust-banner-sdk,#onetrust-pc-sdk', 'any');
    }

    async optOut() {
        if (this.elementVisible('#onetrust-reject-all-handler,.ot-pc-refuse-all-handler,.js-reject-cookies', 'any')) {
            // 'reject all' shortcut
            return await this.click('#onetrust-reject-all-handler,.ot-pc-refuse-all-handler,.js-reject-cookies');
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
        return await this.click('#onetrust-accept-btn-handler,#accept-recommended-btn-handler,.js-accept-cookies');
    }

    async test() {
        return await waitFor(() => this.mainWorldEval('EVAL_ONETRUST_1'), 10, 500);
    }
}
