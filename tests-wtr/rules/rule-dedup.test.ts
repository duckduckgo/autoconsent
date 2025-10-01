import { expect } from 'chai';
import { deduplicateRules } from '../../lib/encoding';
import { AutoConsentCMPRule } from '../../lib/rules';

describe('deduplicateRules', () => {
    it('returns rules unchanged if no duplicates', () => {
        const rules: AutoConsentCMPRule[] = [
            {
                name: 'rule1',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ click: '#selector1' }],
                optIn: [],
                runContext: { urlPattern: 'example.com', main: true, frame: false },
            },
            {
                name: 'rule2',
                detectCmp: [{ exists: '#selector2' }],
                detectPopup: [{ visible: '#selector2' }],
                optOut: [{ click: '#selector2' }],
                optIn: [],
                runContext: { urlPattern: 'test.com', main: true, frame: false },
            },
        ];
        const deduped = deduplicateRules(rules);
        expect(deduped).to.have.length(2);
        expect(deduped.map((r) => r.name))
            .to.include('rule1')
            .and.include('rule2');
    });

    it('deduplicates rules with same selector', () => {
        const rules: AutoConsentCMPRule[] = [
            {
                name: 'rule1',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ waitForThenClick: '#selector1' }],
                optIn: [],
                runContext: { urlPattern: '^https?://(www\\.)?a\\.com/', main: true, frame: false },
            },
            {
                name: 'rule2',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ waitForThenClick: '#selector1' }],
                optIn: [],
                runContext: { urlPattern: '^https?://(www\\.)?b\\.com/', main: true, frame: false },
            },
        ];
        const deduped = deduplicateRules(rules);
        expect(deduped).to.have.length(1);
        expect(deduped[0].name).to.match(/^rule1_\+\d+$/);
        expect(deduped[0].detectCmp[0].exists).to.equal('#selector1');
        const urlPatternMatches = (url: string) => url.match(deduped[0].runContext!.urlPattern!) !== null;
        expect(urlPatternMatches('http://www.a.com/')).to.be.true;
        expect(urlPatternMatches('https://b.com/')).to.be.true;
        expect(urlPatternMatches('https://c.com/')).to.be.false;
    });

    it('does not deduplicate non-simple rules', () => {
        const rules: AutoConsentCMPRule[] = [
            {
                name: 'complex',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ click: '#selector1' }],
                optIn: [],
                runContext: { urlPattern: 'a.com', main: true, frame: false },
                prehideSelectors: ['#something'],
            },
        ];
        const deduped = deduplicateRules(rules);
        expect(deduped).to.have.length(1);
        expect(deduped[0].name).to.equal('complex');
    });

    it('deduplicates only simple rules and keeps others', () => {
        const rules: AutoConsentCMPRule[] = [
            {
                name: 'rule1',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ waitForThenClick: '#selector1' }],
                optIn: [],
                runContext: { urlPattern: '^https?://(www\\.)?a\\.com/', main: true, frame: false },
            },
            {
                name: 'rule2',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ waitForThenClick: '#selector1' }],
                optIn: [],
                runContext: { urlPattern: '^https?://(www\\.)?b\\.com/', main: true, frame: false },
            },
            {
                name: 'complex',
                detectCmp: [{ exists: '#selector2' }],
                detectPopup: [{ visible: '#selector2' }],
                optOut: [{ waitForThenClick: '#selector2' }],
                optIn: [],
                runContext: { urlPattern: '^https?://(www\\.)?c\\.com/', main: true, frame: false },
                prehideSelectors: ['#something'],
            },
        ];
        const deduped = deduplicateRules(rules);
        expect(deduped).to.have.length(2);
        expect(deduped.some((r) => r.name === 'complex')).to.be.true;
        expect(deduped.some((r) => /^rule1_\+\d+$/.test(r.name))).to.be.true;
        const combinedRule = deduped.find((r) => r.name !== 'complex');
        const urlPatternMatches = (url: string) => url.match(combinedRule!.runContext!.urlPattern!) !== null;
        expect(urlPatternMatches('http://www.a.com/')).to.be.true;
        expect(urlPatternMatches('https://b.com/')).to.be.true;
        expect(urlPatternMatches('https://c.com/')).to.be.false;
    });

    it('returns empty array for empty input', () => {
        const deduped = deduplicateRules([]);
        expect(deduped).to.be.an('array').that.is.empty;
    });
});
