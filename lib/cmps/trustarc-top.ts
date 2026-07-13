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

export default class TrustArcTop extends AutoConsentCMPBase {
    name = 'TrustArc-top';
    prehideSelectors = ['.trustarc-banner-container', `.truste_popframe,.truste_overlay,.truste_box_overlay,${bannerContainer}`];
    runContext: RunContext = {
        main: true,
        frame: false,
    };

    _shortcutButton: HTMLElement | null;
    _optInDone: boolean;

    constructor(autoconsentInstance: AutoConsent) {
        super(autoconsentInstance);
        this._shortcutButton = null; // indicates if the "reject all" button is detected
        this._optInDone = false;
    }

    get hasSelfTest(): boolean {
        return true;
    }

    get isIntermediate(): boolean {
        if (this._optInDone) {
            return false;
        }
        return !this._shortcutButton;
    }

    get isCosmetic(): boolean {
        return false;
    }

    async detectCmp() {
        const result = this.elementExists(`${cookieSettingsButton},${bannerContainer}`);
        if (result) {
            // additionally detect the opt-out button
            this._shortcutButton = document.querySelector(shortcutOptOut);
        }
        return result;
    }

    async detectPopup() {
        // not every element should exist, but if it does, it's a popup
        return this.elementVisible(`${popupContent},${bannerOverlay},${bannerContainer}`, 'any');
    }

    async optOut() {
        if (this.elementExists(shortcutOptOut)) {
            this.click(shortcutOptOut);
            // Some TrustArc integrations (e.g. admiral.com, diamond.co.uk, elephant.co.uk)
            // rely on a `transitionend` callback to remove the banner overlay. Prehiding the
            // overlay sets its opacity to 0 upfront, so TrustArc's opacity transition never
            // fires and the fixed, full-viewport overlay is left in the DOM, silently
            // blocking clicks on the underlying page. Hide it explicitly as a fallback
            // (harmless when TrustArc dismisses it itself).
            hideElements(getStyleElement(), `.truste_popframe, .truste_overlay, .truste_box_overlay, ${bannerContainer}`);
            setTimeout(() => {
                getStyleElement().remove();
            }, 10000);
            return true;
        }

        // hide elements permanently, so user doesn't see the popup
        hideElements(getStyleElement(), `.truste_popframe, .truste_overlay, .truste_box_overlay, ${bannerContainer}`);
        await this.click(cookieSettingsButton);

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
