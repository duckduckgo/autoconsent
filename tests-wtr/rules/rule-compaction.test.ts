import { expect } from '@esm-bundle/chai';
import { encodeRules, decodeRules, buildStrings, encodeRulesV2 } from '../../lib/encoding';
import { AutoConsentCMPRule, AutoConsentRuleStep } from '../../lib/rules';
import { autoconsent } from '../../rules/rules.json';
import AutoConsent from '../../lib/web';

function compareRules(originalRule: AutoConsentCMPRule, finalRule: AutoConsentCMPRule, ignoredKeys: string[] = []) {
    // strip comments from original rules
    const stripCommentFromStep = (step: AutoConsentRuleStep) => {
        if (step.comment) {
            delete step.comment; // comments are not encoded
        }
        if (step.if) {
            step.if = stripCommentFromStep(step.if);
        }
        if (step.then) {
            step.then = step.then.map(stripCommentFromStep);
        }
        if (step.else) {
            step.else = step.else.map(stripCommentFromStep);
        }
        return step;
    };
    const stripComments = (steps: AutoConsentRuleStep[]) => steps.map(stripCommentFromStep);
    [originalRule.detectPopup, originalRule.detectCmp, originalRule.optOut, originalRule.test].forEach((steps) =>
        stripComments(steps!),
    );

    for (const key of Object.keys(originalRule).filter((k) => !ignoredKeys.includes(k))) {
        // @ts-expect-error Type checker doesn't like us using dynamic attributes here
        expect(finalRule[key]).to.deep.equal(originalRule[key], `${key} is correctly preserved`);
    }
}

describe('RuleCompaction', () => {
    it('decodeRules(encodeRules(rules)) preserves required attributes', () => {
        const rules: AutoConsentCMPRule[] = JSON.parse(JSON.stringify(autoconsent));

        const encoded = encodeRules(rules, null);
        const decoded = decodeRules(encoded);
        const ignoredKeys = ['comment', 'optIn', 'vendorUrl', '_metadata'];
        expect(rules.length).to.equal(decoded.length);
        for (let i = 0; i < rules.length; i++) {
            // ensure non-empty values for runContext, test, and prehideSelectors
            const originalRule = {
                runContext: {},
                test: [],
                prehideSelectors: [],
                ...rules[i],
            };
            const finalRule = decoded[i];
            compareRules(originalRule, finalRule, ignoredKeys);
        }
        const originalLength = JSON.stringify(rules).length;
        const encodedLength = JSON.stringify(encoded).length;
        // > 50% size reduction
        // Tuple encoding: 45%
        // Exists lookup:  53%
        // Visible lookup: 70%
        // waitForThenClick: 73%
        console.log('Original Size:', originalLength, 'Encoded Size:', encodedLength);
        expect((originalLength - encodedLength) / encodedLength).to.be.greaterThan(0.75);
    });

    it('decodeRules: refuses to decode future formats', () => {
        expect(() => decodeRules({ v: 2, s: [], r: [] })).to.throw('Unsupported rule format.');
    });

    it('decodeRules: runContext flags are extendable', () => {
        // We can add new flags on the left-hand side of the runContext field and old clients
        // will still be able to parse the lower two.
        const decoded = decodeRules({
            v: 1,
            s: [],
            r: [
                [1, 'test_extra_flag', 0, '', 112, [], [], [], [], [], {}],
                [1, 'test', 0, '', 10, [], [], [], [], [], {}],
            ],
        });
        expect(decoded[0].runContext).to.eql({ main: true });
        expect(decoded[1].runContext).to.eql({ main: true, frame: false });
    });

    it('decodeRules(encodeRulesV2(rules)) preserves required attributes', () => {
        const rules: AutoConsentCMPRule[] = JSON.parse(JSON.stringify(autoconsent));

        const encoded = encodeRulesV2(rules, null);
        const decoded = decodeRules(encoded);
        const ignoredKeys = ['comment', 'optIn', 'vendorUrl', '_metadata', 'test'];
        expect(rules.length).to.equal(decoded.length);
        for (let i = 0; i < rules.length; i++) {
            // ensure non-empty values for runContext, test, and prehideSelectors
            const originalRule = {
                runContext: {},
                test: [],
                prehideSelectors: [],
                ...rules[i],
            };
            const finalRule = decoded.find(r => r.name === originalRule.name);
            compareRules(originalRule, finalRule!, ignoredKeys);
        }
    })

    it('decodeRules: filters out rules that use newer step/eval rules', () => {
        const decoded = decodeRules({
            v: 1,
            s: [],
            r: [
                // @ts-expect-error Test rule has different shape on purpose
                [10, 'test_future', 0, '', 112, [], [], [], [], [], [], {}],
                [1, 'test', 0, '', 10, [], [], [], [], [], {}],
            ],
        });
        expect(decoded).to.have.length(1);
        expect(decoded[0].name).to.equal('test');
    });

    describe('buildStrings: minimizes string index diff', () => {
        it('remove and add strings', () => {
            const rules: AutoConsentCMPRule[] = [
                {
                    name: 'test',
                    detectCmp: [{ exists: 'staysinplace1' }],
                    detectPopup: [{ visible: 'staysinplace2' }],
                    optOut: [{ click: 'staysinplace3' }, { click: 'new1' }, { click: 'new2' }, { click: 'new3' }],
                    optIn: [],
                },
            ];
            const strings = buildStrings(['staysinplace1', 'staysinplace2', 'gone1', 'gone2', 'staysinplace3'], rules);
            expect(strings).to.deep.equal(['staysinplace1', 'staysinplace2', 'new1', 'new2', 'staysinplace3', 'new3']);
        });

        it('only add strings', () => {
            const rules: AutoConsentCMPRule[] = [
                {
                    name: 'test',
                    detectCmp: [{ exists: 'staysinplace1' }],
                    detectPopup: [{ visible: 'staysinplace2' }],
                    optOut: [{ click: 'staysinplace3' }, { click: 'new1' }, { click: 'new2' }, { click: 'new3' }],
                    optIn: [],
                },
            ];
            const strings = buildStrings(['staysinplace1', 'staysinplace2', 'staysinplace3'], rules);
            expect(strings).to.deep.equal(['staysinplace1', 'staysinplace2', 'staysinplace3', 'new1', 'new2', 'new3']);
        });

        it('only remove strings', () => {
            const rules: AutoConsentCMPRule[] = [
                {
                    name: 'test',
                    detectCmp: [{ exists: 'staysinplace1' }],
                    detectPopup: [{ visible: 'staysinplace2' }],
                    optOut: [{ click: 'staysinplace3' }],
                    optIn: [],
                },
            ];
            const strings = buildStrings(['staysinplace1', 'staysinplace2', 'staysinplace3', 'gone1', 'gone2', 'gone3'], rules);
            expect(strings).to.deep.equal(['staysinplace1', 'staysinplace2', 'staysinplace3']);
        });

        it('unchanged strings', () => {
            const rules: AutoConsentCMPRule[] = [
                {
                    name: 'test',
                    detectCmp: [{ exists: 'staysinplace1' }],
                    detectPopup: [{ visible: 'staysinplace2' }],
                    optOut: [{ click: 'staysinplace3' }],
                    optIn: [],
                },
            ];
            const strings = buildStrings(['staysinplace1', 'staysinplace2', 'staysinplace3'], rules);
            expect(strings).to.deep.equal(['staysinplace1', 'staysinplace2', 'staysinplace3']);
        });
    });
});

describe('AutoConsent', () => {
    it('parseDeclarativeRules: filters out rules that use newer step/eval rules', () => {
        const autoconsent = new AutoConsent(() => Promise.resolve());
        const dynamicRuleCount = autoconsent.rules.length;
        autoconsent.parseDeclarativeRules({
            autoconsent: [],
            compact: encodeRules(
                [
                    {
                        name: 'test',
                        detectCmp: [{ exists: '#cmp' }],
                        detectPopup: [{ visible: '#cmp' }],
                        optOut: [{ click: '#opt-out' }],
                        optIn: [],
                        minimumRuleStepVersion: 1,
                    },
                    {
                        name: 'future_rule',
                        detectCmp: [{ exists: '#cmp' }],
                        detectPopup: [{ visible: '#cmp' }],
                        optOut: [{ click: '#opt-out' }],
                        optIn: [],
                        minimumRuleStepVersion: 7,
                    },
                ],
                null,
            ),
        });
        expect(autoconsent.rules).to.have.length(dynamicRuleCount + 1);
    });
});
