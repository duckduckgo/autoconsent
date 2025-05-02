import { expect } from '@esm-bundle/chai';
import { encodeRules, decodeRules } from '../../lib/encoding';
import { AutoConsentCMPRule } from '../../lib/rules';
import { autoconsent } from '../../rules/rules.json';

describe('RuleCompaction', () => {
    it('decodeRules(encodeRules(rules)) preserves required attributes', () => {
        const rules: AutoConsentCMPRule[] = JSON.parse(JSON.stringify(autoconsent));

        const encoded = encodeRules(rules);
        const decoded = decodeRules(encoded);
        expect(rules.length).to.equal(decoded.length);
        const requiredKeys = [
            'name',
            'intermediate',
            'cosmetic',
            'prehideSelectors',
            'runContext',
            'detectCmp',
            'detectPopup',
            'optOut',
            'openCmp',
            'test',
        ];
        for (let i = 0; i < rules.length; i++) {
            const originalRule = rules[i];
            const finalRule = decoded[i];
            for (const key of requiredKeys) {
                // @ts-expect-error Type checker doesn't like us using dynamic attributes here
                expect(originalRule[key]).to.deep.equal(finalRule[key], `${key} is correctly preserved`);
            }
        }
        const originalLength = JSON.stringify(rules).length;
        const encodedLength = JSON.stringify(encoded).length;
        // > 50% size reduction
        // Tuple encoding: 45%
        // Exists lookup:  53%
        // Visible lookup: 70%
        // waitForThenClick: 73%
        expect((originalLength - encodedLength) / encodedLength).to.be.greaterThan(0.7);
        console.log('Original Size:', originalLength, 'Encoded Size:', encodedLength);
    });

    it('decodeRules: refuses to decode future formats', () => {
        expect(() => decodeRules({ v: 2, s: [], r: [] })).to.throw('Unsupported rule format.');
    });
});
