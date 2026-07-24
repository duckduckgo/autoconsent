import AutoConsentCMPBase from './base';

const iframeSecondaryButton = ['#cmp-app-container iframe', '.cmp-components-button.is-secondary'];
const iframePrimaryButton = ['#cmp-app-container iframe', '.cmp-components-button.is-primary'];
const iframePreferencesInput = ['#cmp-app-container iframe', '.cmp__dialog input'];

export default class Tumblr extends AutoConsentCMPBase {
    name = 'tumblr-com';
    runContext = {
        urlPattern: '^https://(www\\.)?tumblr\\.com/',
        frame: true,
    };

    get hasSelfTest(): boolean {
        return false;
    }

    get isIntermediate(): boolean {
        return false;
    }

    get isCosmetic(): boolean {
        return false;
    }

    get prehideSelectors(): string[] {
        return ['#cmp-app-container', '.gdpr-banner'];
    }

    async detectCmp() {
        return this.elementExists('#cmp-app-container') || this.elementExists('.gdpr-banner');
    }

    async detectPopup() {
        return this.elementVisible('#cmp-app-container', 'any') || this.elementVisible('.gdpr-banner', 'any');
    }

    async optOut() {
        const dismissButton: HTMLAnchorElement | null = document.querySelector('.gdpr-banner .accept-button');
        if (dismissButton) {
            return this.clickElement(dismissButton);
        }

        await this.waitForElement(iframeSecondaryButton, 5000);

        const settingsButton = this.elementSelector(iframeSecondaryButton)[0];
        if (!settingsButton) {
            return false;
        }
        const isDirectDecline = /decline|reject/i.test(settingsButton.textContent || '');
        if (!(await this.click(iframeSecondaryButton))) {
            return false;
        }
        if (isDirectDecline) {
            return true;
        }

        await this.waitForElement(iframePreferencesInput, 2500);

        // it's a different button now
        return this.click(iframeSecondaryButton);
    }

    async optIn() {
        const dismissButton: HTMLAnchorElement | null = document.querySelector('.gdpr-banner .accept-button');
        if (dismissButton) {
            return this.clickElement(dismissButton);
        }

        return this.waitForThenClick(iframePrimaryButton, 5000);
    }
}
