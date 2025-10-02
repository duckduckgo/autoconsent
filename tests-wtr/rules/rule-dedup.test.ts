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

    it('deduplicates complex rules', () => {
        const rules: AutoConsentCMPRule[] = [
            {
                name: 'complex',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ click: '#selector1' }, { waitForThenClick: '#selector2' }],
                optIn: [{ click: '#selector2' }],
                runContext: { urlPattern: 'a.com', main: true, frame: false },
                prehideSelectors: ['#something'],
            },
            {
                name: 'complex2',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ click: '#selector1' }, { waitForThenClick: '#selector2' }],
                optIn: [{ click: '#selector2' }],
                runContext: { urlPattern: 'b.com', main: true, frame: false },
                prehideSelectors: ['#something'],
            },
        ];
        const deduped = deduplicateRules(rules);
        expect(deduped).to.have.length(1);
        expect(deduped[0]._metadata?.deduplicatedFrom).to.deep.equal(['complex', 'complex2']);
    });

    it('keeps other rules when deduplicating', () => {
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
                name: 'rule3',
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
        expect(deduped.some((r) => r.name === 'rule3')).to.be.true;
        expect(deduped.some((r) => /^rule1_\+\d+$/.test(r.name))).to.be.true;
        const combinedRule = deduped.find((r) => r.name !== 'rule3');
        const urlPatternMatches = (url: string) => url.match(combinedRule!.runContext!.urlPattern!) !== null;
        expect(urlPatternMatches('http://www.a.com/')).to.be.true;
        expect(urlPatternMatches('https://b.com/')).to.be.true;
        expect(urlPatternMatches('https://c.com/')).to.be.false;
    });

    it('does not deduplicate generic rules (with no urlPattern)', () => {
        const rules: AutoConsentCMPRule[] = [
            {
                name: 'generic1',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ waitForThenClick: '#selector1' }],
                optIn: [],
                runContext: { main: true, frame: false },
            },
            {
                name: 'generic2',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ waitForThenClick: '#selector1' }],
                optIn: [],
                runContext: { main: true, frame: false },
            },
            {
                name: 'specific1',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ waitForThenClick: '#selector1' }],
                optIn: [],
                runContext: { main: true, frame: false, urlPattern: 'b.com' },
            },
            {
                name: 'specific2',
                detectCmp: [{ exists: '#selector1' }],
                detectPopup: [{ visible: '#selector1' }],
                optOut: [{ waitForThenClick: '#selector1' }],
                optIn: [],
                runContext: { main: true, frame: false, urlPattern: 'a.com' },
            },
        ];
        const deduped = deduplicateRules(rules);
        expect(deduped).to.have.length(3);
        expect(deduped.map((r) => r.name))
            .to.include('generic1')
            .and.include('generic2');
    });

    it('returns empty array for empty input', () => {
        const deduped = deduplicateRules([]);
        expect(deduped).to.be.an('array').that.is.empty;
    });
});
