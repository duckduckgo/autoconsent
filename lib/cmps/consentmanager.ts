import { ElementSelector } from '../rules';
import { waitFor } from '../utils';
import AutoConsentCMPBase from './base';

// The consent layer is rendered either in the light DOM, or inside #cmpwrapper's shadow root.
const POPUP_SELECTORS: ElementSelector[] = ['#cmpbox .cmpmore', ['#cmpwrapper', '#cmpbox .cmpmore']];
// How long to watch for a consent layer that renders after the API call.
const LATE_POPUP_TIMEOUT = 8000;

// Note: JS API is also available:
// https://help.consentmanager.net/books/cmp/page/javascript-api
export default class ConsentManager extends AutoConsentCMPBase {
    name = 'consentmanager.net';

    prehideSelectors = ['#cmpbox,#cmpbox2'];
    apiAvailable = false;

    get hasSelfTest(): boolean {
        return this.apiAvailable;
    }

    get isIntermediate(): boolean {
        return false;
    }

    get isCosmetic(): boolean {
        return false;
    }

    isPopupVisible(): boolean {
        return POPUP_SELECTORS.some((selector) => this.elementVisible(selector, 'any'));
    }

    waitForPopupVisible(timeout = LATE_POPUP_TIMEOUT): Promise<boolean> {
        const interval = 200;
        return waitFor(() => this.isPopupVisible(), Math.ceil(timeout / interval), interval);
    }

    async detectCmp() {
        this.apiAvailable = await this.mainWorldEval('EVAL_CONSENTMANAGER_1');
        if (!this.apiAvailable) {
            return this.elementExists('#cmpbox');
        } else {
            return true;
        }
    }

    async detectPopup() {
        if (this.isPopupVisible()) {
            return true;
        } else if (this.apiAvailable) {
            // wait before making this check because early in the page lifecycle this may incorrectly return
            // true, causing an opt-out when it is not needed.
            await this.wait(500);
            return await this.mainWorldEval('EVAL_CONSENTMANAGER_2');
        }
        return false;
    }

    async optOut() {
        await this.wait(500);
        if (this.apiAvailable) {
            // The API reports "no user choice yet" before the consent layer is rendered, so the
            // call below can land early: it stores the choice, but the layer still shows up
            // afterwards and stays on screen. Re-apply the choice to close it in that case.
            const popupWasVisible = this.isPopupVisible();
            const result = await this.mainWorldEval('EVAL_CONSENTMANAGER_3');
            if (!popupWasVisible && (await this.waitForPopupVisible())) {
                return await this.mainWorldEval('EVAL_CONSENTMANAGER_3');
            }
            return result;
        }

        if (await this.click('.cmpboxbtnno')) {
            return true;
        }

        if (this.elementExists('.cmpwelcomeprpsbtn')) {
            await this.click('.cmpwelcomeprpsbtn > a[aria-checked=true]', true);
            await this.click('.cmpboxbtnsave');
            return true;
        }

        await this.click('.cmpboxbtncustom');
        await this.waitForElement('.cmptblbox', 2000);
        await this.click('.cmptdchoice > a[aria-checked=true]', true);
        await this.click('.cmpboxbtnyescustomchoices');

        this.hide('#cmpwrapper,#cmpbox', 'display');
        return true;
    }

    async optIn() {
        if (this.apiAvailable) {
            return await this.mainWorldEval('EVAL_CONSENTMANAGER_4');
        }
        return await this.click('.cmpboxbtnyes');
    }

    async test() {
        if (this.apiAvailable) {
            return await this.mainWorldEval('EVAL_CONSENTMANAGER_5');
        }
        return false;
    }
}
