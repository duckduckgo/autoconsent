import { getStyleElement, hideElements } from '../utils';
import AutoConsentCMPBase from './base';

export default class Evidon extends AutoConsentCMPBase {
    name = 'Evidon';

    get hasSelfTest(): boolean {
        return false;
    }

    get isIntermediate(): boolean {
        return false;
    }

    get isCosmetic(): boolean {
        return false;
    }

    async detectCmp() {
        return this.elementExists('#_evidon_banner, #_evidon-barrier-wrapper');
    }

    async detectPopup() {
        return this.elementVisible('#_evidon_banner, #_evidon-barrier-wrapper #_evidon-banner', 'any');
    }

    async optOut() {
        // some sites put a custom reject link into the banner text instead of a decline button
        if (await this.click('#_evidon-decline-button, #_evidon-barrier-declinebutton, #_evidon_banner #RejectLink')) {
            return true;
        }

        hideElements(getStyleElement(), '#evidon-prefdiag-overlay,#evidon-prefdiag-background,#_evidon-background');
        await this.waitForThenClick('#_evidon-option-button');

        await this.waitForElement('#evidon-prefdiag-overlay', 5000);

        await this.wait(500);
        await this.waitForThenClick('#evidon-prefdiag-decline');
        return true;
    }

    async optIn() {
        return await this.click('#_evidon-accept-button, #_evidon-banner-acceptbutton');
    }
}
