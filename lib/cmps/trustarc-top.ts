import { RunContext } from '../rules';
import { getStyleElement, hideElements } from '../utils';
import AutoConsent from '../web';
import AutoConsentCMPBase from './base';

const cookieSettingsButton = '#truste-show-consent';
const shortcutOptOut = '#truste-consent-required';
const shortcutOptIn = '#truste-consent-button';
const popupContent = '#truste-consent-content';
const bannerOverlay = '#trustarc-banner-overlay';
const bannerContainer = '#truste-consent-track';
// preference center opened by the settings button renders into a shadow root
const settingsOptOut = ['.truste_popframe.trustarc_newcm_container', '.trustarc-declineall-btn, a.required'];

export default class TrustArcTop extends AutoConsentCMPBase {
    name = 'TrustArc-top';
    prehideSelectors = ['.trustarc-banner-container', `.truste_popframe,.truste_overlay,.truste_box_overlay,${bannerContainer}`];
    runContext: RunContext = {
        main: true,
        frame: false,
    };

    _optOutDone: boolean;
    _optInDone: boolean;

    constructor(autoconsentInstance: AutoConsent) {
        super(autoconsentInstance);
        this._optOutDone = false; // indicates if a "reject all" button was clicked
        this._optInDone = false;
    }

    get hasSelfTest(): boolean {
        return true;
    }

    get isIntermediate(): boolean {
        if (this._optInDone) {
            return false;
        }
        return !this._optOutDone;
    }

    get isCosmetic(): boolean {
        return false;
    }

    async detectCmp() {
        return this.elementExists(`${cookieSettingsButton},${bannerContainer}`);
    }

    async detectPopup() {
        // not every element should exist, but if it does, it's a popup
        return this.elementVisible(`${popupContent},${bannerOverlay},${bannerContainer}`, 'any');
    }

    async optOut() {
        if (this.elementExists(shortcutOptOut)) {
            const shortcutVisible = this.elementVisible(shortcutOptOut, 'any');
            this._optOutDone = true;
            await this.click(shortcutOptOut);
            // a hidden reject button is not always wired up; when it is, the banner is dismissed synchronously
            if (shortcutVisible || !this.elementExists(`${bannerContainer}.ta-show`)) {
                return true;
            }
            this._optOutDone = false;
        }

        // hide elements permanently, so user doesn't see the popup
        hideElements(getStyleElement(), `.truste_popframe, .truste_overlay, .truste_box_overlay, ${bannerContainer}`);
        await this.click(cookieSettingsButton);

        if (await this.waitForElement(settingsOptOut, 5000)) {
            this._optOutDone = true;
            await this.click(settingsOptOut);
        }

        // schedule cleanup
        setTimeout(() => {
            getStyleElement().remove();
        }, 10000);

        return true;
    }

    async optIn() {
        this._optInDone = true; // just a hack to force autoconsentDone
        return await this.click(shortcutOptIn);
    }

    async openCmp() {
        // await tab.eval("truste.eu.clickListener()");
        return true;
    }

    async test() {
        // Test JS variable to check the user's preference
        // PrefCookie = undefined means no consent is set, PrefCookie = '0' means consent is set to required only
        await this.wait(500);
        return await this.mainWorldEval('EVAL_TRUSTARC_TOP');
    }
}
