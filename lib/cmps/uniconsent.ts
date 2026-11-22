import { ElementSelector } from '../rules';
import AutoConsentCMPBase from './base';

const POPUP_SELECTOR = '.unic .unic-box,.unic .unic-bar,.unic .unic-modal';
const SHADOW_HOST = '#uniccmp';

export default class Uniconsent extends AutoConsentCMPBase {
    name = 'Uniconsent';

    get prehideSelectors(): string[] {
        return ['.unic', '.modal:has(.unic)', SHADOW_HOST];
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

    // Newer versions render the popup inside an open shadow root on #uniccmp
    private sel(selector: string): ElementSelector {
        return document.querySelector(SHADOW_HOST)?.shadowRoot ? [SHADOW_HOST, selector] : selector;
    }

    private get root(): Document | ShadowRoot {
        return document.querySelector(SHADOW_HOST)?.shadowRoot || document;
    }

    async detectCmp() {
        return this.elementExists(this.sel(POPUP_SELECTOR));
    }

    async detectPopup() {
        return this.elementVisible(this.sel(POPUP_SELECTOR), 'any');
    }

    async optOut() {
        await this.waitForElement(this.sel('.unic button'), 1000);
        if (this.elementVisible(this.sel('.unic .unic-reject-all-button'), 'any')) {
            return this.rejectAll();
        }

        if (this.elementExists(this.sel('.unic .unic-manage-options-button'))) {
            await this.click(this.sel('.unic .unic-manage-options-button'));
        } else {
            this.root.querySelectorAll<HTMLButtonElement>('.unic button').forEach((button) => {
                const text = button.textContent || '';
                if (text.includes('Manage Options') || text.includes('Optionen verwalten')) {
                    button.click();
                }
            });
        }

        if (await this.waitForElement(this.sel('.unic .unic-reject-all-button'), 1000)) {
            return this.rejectAll();
        }

        if (await this.waitForElement(this.sel('.unic input[type=checkbox]'), 1000)) {
            await this.waitForElement(this.sel('.unic button'), 1000);

            this.root.querySelectorAll<HTMLInputElement>('.unic input[type=checkbox]').forEach((c) => {
                if (c.checked) {
                    c.click();
                }
            });

            if (this.elementExists(this.sel('.unic .unic-confirm-button'))) {
                await this.click(this.sel('.unic .unic-confirm-button'));
                await this.wait(500); // give it some time to close the popup
                return true;
            }

            const buttons = [...this.root.querySelectorAll<HTMLButtonElement>('.unic button')];
            for (const pattern of [
                'Reject All',
                'Alle ablehnen',
                'Confirm Choices',
                'Save Choices',
                'Auswahl speichern',
                'Auswahl bestätigen',
            ]) {
                const b = buttons.find((button) => (button.textContent || '').includes(pattern));
                if (b) {
                    b.click();
                    await this.wait(500); // give it some time to close the popup
                    return true;
                }
            }
        }

        return false;
    }

    private async rejectAll() {
        await this.click(this.sel('.unic .unic-reject-all-button'));
        await this.wait(500); // give it some time to close the popup
        return true;
    }

    async optIn() {
        if (this.elementExists(this.sel('.unic .unic-agree-all-button'))) {
            return this.click(this.sel('.unic .unic-agree-all-button'));
        }
        return this.waitForThenClick(this.sel('.unic #unic-agree'));
    }

    async test() {
        await this.wait(1000);
        return this.elementVisible(this.sel(POPUP_SELECTOR), 'none');
    }
}
