import AutoConsentCMPBase from './base';

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

    async detectCmp() {
        this.apiAvailable = await this.mainWorldEval('EVAL_CONSENTMANAGER_1');
        if (!this.apiAvailable) {
            return this.elementExists('#cmpbox');
        } else {
            return true;
        }
    }

    async detectPopup() {
        // pay-or-consent walls (PUR mode, e.g. contentpass) have no reject option and are not handled
        if (this.elementExists('#cmpbox.cmpboxcontentpass')) {
            return false;
        }
        if (this.elementVisible('#cmpbox .cmpmore', 'any')) {
            return !(await this.mainWorldEval('EVAL_CONSENTMANAGER_PUR'));
        } else if (this.apiAvailable) {
            // wait before making this check because early in the page lifecycle this may incorrectly return
            // true, causing an opt-out when it is not needed.
            await this.wait(500);
            if (!(await this.mainWorldEval('EVAL_CONSENTMANAGER_2'))) {
                return false;
            }
            // the API can be ready before the config that tells whether this is a pay-or-consent wall
            const deadline = Date.now() + 5000;
            while (Date.now() < deadline && (await this.mainWorldEval('EVAL_CONSENTMANAGER_CONFIG_PENDING'))) {
                await this.wait(250);
            }
            return !(await this.mainWorldEval('EVAL_CONSENTMANAGER_PUR'));
        }
        return false;
    }

    async optOut() {
        await this.wait(500);
        if (this.apiAvailable) {
            return await this.mainWorldEval('EVAL_CONSENTMANAGER_3');
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
