import { expect } from '@esm-bundle/chai';
import type { AutoConsentCMPRule } from '../../lib/rules';

// Step keys whose values are element selectors
const SELECTOR_KEYS = ['exists', 'visible', 'waitFor', 'waitForVisible', 'click', 'waitForThenClick', 'hide', 'selector', 'removeClass'];

function collectStepSelectors(node: unknown, out: string[]) {
    if (Array.isArray(node)) {
        node.forEach((n) => collectStepSelectors(n, out));
        return;
    }
    if (!node || typeof node !== 'object') {
        return;
    }
    for (const [key, value] of Object.entries(node)) {
        if (SELECTOR_KEYS.includes(key) && (typeof value === 'string' || Array.isArray(value))) {
            [value].flat().forEach((s) => typeof s === 'string' && out.push(s));
        } else if (typeof value === 'object') {
            collectStepSelectors(value, out);
        }
    }
}

function isValidCssSelector(selector: string) {
    try {
        document.querySelector(selector);
        return true;
    } catch {
        return false;
    }
}

// steps evaluate `xpath/` selectors as XPath; prehide selectors go straight into a CSS rule
function isValidStepSelector(selector: string) {
    return selector.startsWith('xpath/') || isValidCssSelector(selector);
}

describe('rule selectors', () => {
    let rules: AutoConsentCMPRule[];

    before(async () => {
        // built by `npm run build-rules`, which `npm run test:lib` runs first; a variable path keeps lint from resolving the generated file
        const rulesPath = '../../rules/rules.json';
        rules = (await import(rulesPath)).default.autoconsent;
    });

    it('has only valid CSS prehide selectors', () => {
        const invalid = rules.flatMap((rule) =>
            (rule.prehideSelectors || []).filter((s) => !isValidCssSelector(s)).map((s) => `${rule.name}: ${s}`),
        );
        expect(invalid).to.deep.equal([]);
    });

    it('has only valid CSS selectors in rule steps', () => {
        const invalid = rules.flatMap((rule) => {
            const selectors: string[] = [];
            collectStepSelectors([rule.detectCmp, rule.detectPopup, rule.optIn, rule.optOut, rule.test], selectors);
            return selectors.filter((s) => !isValidStepSelector(s)).map((s) => `${rule.name}: ${s}`);
        });
        expect(invalid).to.deep.equal([]);
    });
});
