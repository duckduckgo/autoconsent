import { ElementSelector } from '../rules';
import AutoConsentCMPBase from './base';

// Newer versions of the CMP render the banner inside a shadow root instead of the top-level document.
function bannerSelectors(selector: string): ElementSelector[] {
    return [selector, ['#cmpwrapper', selector]];
}

// Note: JS API is also available:
// https://help.consentmanager.net/books/cmp/page/javascript-api
export default class ConsentManager extends AutoConsentCMPBase {
    name = 'consentmanager.net';

    prehideSelectors = ['#cmpbox,#cmpbox2,#cmpwrapper'];
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

    async detectCmp() {
        this.apiAvailable = await this.mainWorldEval('EVAL_CONSENTMANAGER_1');
        if (!this.apiAvailable) {
            return bannerSelectors('#cmpbox').some((selector) => this.elementExists(selector));
        } else {
            return true;
        }
    }

    async detectPopup() {
        if (bannerSelectors('#cmpbox .cmpmore').some((selector) => this.elementVisible(selector, 'any'))) {
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
            const bannerWasVisible = this.isBannerVisible();
            const result = await this.mainWorldEval('EVAL_CONSENTMANAGER_3');
            await this.dismissBanner(!bannerWasVisible);
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

    isBannerVisible(): boolean {
        return bannerSelectors('#cmpbox').some((selector) => this.elementVisible(selector, 'any'));
    }

    // The API stores the choice without closing the banner when the banner renders after the call,
    // which leaves an overlay covering the page.
    async dismissBanner(waitForBanner: boolean) {
        if (waitForBanner) {
            const appearDeadline = Date.now() + 2000;
            while (!this.isBannerVisible() && Date.now() < appearDeadline) {
                await this.wait(200);
            }
        }
        if (!this.isBannerVisible()) {
            return;
        }
        if (waitForBanner) {
            // The first call could be a no-op while the banner was still initializing.
            await this.mainWorldEval('EVAL_CONSENTMANAGER_3');
        }
        await this.mainWorldEval('EVAL_CONSENTMANAGER_6');
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
