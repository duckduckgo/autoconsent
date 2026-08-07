import AutoConsentCMPBase from './base';

// Note: JS API is also available:
// https://help.consentmanager.net/books/cmp/page/javascript-api
export default class ConsentManager extends AutoConsentCMPBase {
    name = 'consentmanager.net';

    prehideSelectors = ['#cmpbox,#cmpbox2,#ncmp__tool .ncmp__banner'];
    apiAvailable = false;
    ncmpAvailable = false;

    get hasSelfTest(): boolean {
        return this.apiAvailable || this.ncmpAvailable;
    }

    get isIntermediate(): boolean {
        return false;
    }

    get isCosmetic(): boolean {
        return false;
    }

    async detectCmp() {
        this.ncmpAvailable = this.elementExists('#ncmp__tool .ncmp__banner.ncmp__active');
        if (this.ncmpAvailable) {
            return true;
        }

        this.apiAvailable = await this.mainWorldEval('EVAL_CONSENTMANAGER_1');
        if (!this.apiAvailable) {
            return this.elementExists('#cmpbox');
        } else {
            return true;
        }
    }

    async detectPopup() {
        if (this.ncmpAvailable) {
            return this.elementVisible('#ncmp__tool .ncmp__banner.ncmp__active', 'any');
        }

        if (this.elementVisible('#cmpbox .cmpmore', 'any')) {
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
        if (this.ncmpAvailable || this.elementExists('#ncmp__tool .ncmp__banner')) {
            if (await this.mainWorldEval('EVAL_CONSENTMANAGER_NCMP_REJECT')) {
                return true;
            }

            if (!this.elementExists('button[onclick*="reject"].ncmp__btn-danger')) {
                await this.waitForThenClick('button[onclick*="showModal"].ncmp__btn-border', 5000);
            }
            return await this.waitForThenClick('button[onclick*="reject"].ncmp__btn-danger', 5000);
        }

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
        if (this.ncmpAvailable || this.elementExists('#ncmp__tool .ncmp__banner')) {
            if (await this.mainWorldEval('EVAL_CONSENTMANAGER_NCMP_ACCEPT')) {
                return true;
            }

            return await this.waitForThenClick('button[onclick*="save"].ncmp__btn', 5000);
        }

        if (this.apiAvailable) {
            return await this.mainWorldEval('EVAL_CONSENTMANAGER_4');
        }
        return await this.click('.cmpboxbtnyes');
    }

    async test() {
        if (this.ncmpAvailable) {
            return this.cookieContains('ncmp=');
        }

        if (this.apiAvailable) {
            return await this.mainWorldEval('EVAL_CONSENTMANAGER_5');
        }
        return false;
    }
}
