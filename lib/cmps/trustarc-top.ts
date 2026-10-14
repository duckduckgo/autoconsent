import { RunContext } from '../rules';
import { getStyleElement, hideElements, isElementVisible, waitFor } from '../utils';
import AutoConsent from '../web';
import AutoConsentCMPBase from './base';

const cookieSettingsButton = '#truste-show-consent';
const shortcutOptOut = '#truste-consent-required';
const shortcutOptIn = '#truste-consent-button';
const popupContent = '#truste-consent-content';
const bannerOverlay = '#trustarc-banner-overlay';
const bannerContainer = '#truste-consent-track';
const newcmPopframe = '.truste_popframe.trustarc_newcm_container';
const newcmRejectButtons = [newcmPopframe, 'button.trustarc-declineall-btn, button.trustarc-rejectall-btn'];

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
        return !this._optInDone && !this._optOutDone;
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
            this.click(shortcutOptOut);
            // a hidden "reject all" button works on some sites, but does nothing on others
            this._optOutDone =
                shortcutVisible || (await waitFor(() => !this.elementVisible(`${popupContent},${bannerContainer}`, 'any'), 10, 200));
            if (this._optOutDone) {
                return true;
            }
        }

        // hide elements permanently, so user doesn't see the popup (opacity keeps the buttons measurable)
        hideElements(getStyleElement(), `.truste_popframe, .truste_overlay, .truste_box_overlay, ${bannerContainer}`, 'opacity');
        await this.click(cookieSettingsButton);

        // the new consent manager renders the preferences in a shadow root of the top frame
        const rejectButton =
            (await this.waitForVisible(newcmRejectButtons, 5000, 'any')) &&
            this.elementSelector(newcmRejectButtons).find((e) => isElementVisible(e));
        if (rejectButton) {
            await this.clickElement(rejectButton);
            this._optOutDone = await waitFor(() => !this.elementExists(newcmPopframe), 25, 200);
            if (this._optOutDone) {
                getStyleElement().remove();
                return true;
            }
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
