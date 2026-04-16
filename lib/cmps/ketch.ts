import { waitFor } from '../utils';
import AutoConsentCMPBase from './base';

/**
 * Ketch (ketchjs.com) consent UI is often mounted inside shadow roots, so it is handled here
 * with main-world eval snippets instead of declarative selectors.
 */
export default class Ketch extends AutoConsentCMPBase {
    name = 'ketch';
    prehideSelectors = ['#ketch-consent-banner'];

    get hasSelfTest(): boolean {
        return true;
    }

    get isIntermediate(): boolean {
        return false;
    }

    get isCosmetic(): boolean {
        return false;
    }

    async detectCmp(): Promise<boolean> {
        return this.mainWorldEval('EVAL_KETCH_DETECT_CMP');
    }

    async detectPopup(): Promise<boolean> {
        return this.mainWorldEval('EVAL_KETCH_DETECT_POPUP');
    }

    async optOut(): Promise<boolean> {
        return this.mainWorldEval('EVAL_KETCH_OPT_OUT');
    }

    async optIn(): Promise<boolean> {
        return this.mainWorldEval('EVAL_KETCH_OPT_IN');
    }

    async test(): Promise<boolean> {
        return await waitFor(() => this.mainWorldEval('EVAL_KETCH_TEST'), 10, 500);
    }
}
