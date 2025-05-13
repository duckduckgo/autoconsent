import { expect } from '@esm-bundle/chai';
import Autoconsent from '../../lib/web';

describe('Autoconsent.findCmp', () => {
    let autoconsent: Autoconsent;

    beforeEach(() => {
        // Given
        autoconsent = new Autoconsent((msg) => Promise.resolve(), {
            enabled: false, // bypass initialization
            autoAction: null,
        });
    });

    it('should detect a CMP in a page', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'test',
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(1);
        expect(found[0].name).to.equal('test');
    });

    it('can return more than 1 match', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'test',
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        autoconsent.addDeclarativeCMP({
            name: 'test2',
            detectCmp: [{ exists: '#reject-all' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(2);
    });

    it('returns empty if no rules match', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'test',
            detectCmp: [{ exists: '#privacy-test-page-cmp-test2' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        autoconsent.addDeclarativeCMP({
            name: 'test2',
            detectCmp: [{ exists: '#reject-all2' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(0);
    });

    it('does not return a rule if the runContext does not match: frame-only rule', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'runContextRule',
            runContext: { main: false, frame: true },
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        autoconsent.addDeclarativeCMP({
            name: 'test',
            detectCmp: [{ exists: '#reject-all' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(1);
        expect(found[0].name).to.equal('test');
    });

    it('does not return a rule if the runContext does not match: urlPattern', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'runContextRule',
            runContext: { urlPattern: '^https://(www\\.)?example\\.com/' },
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        autoconsent.addDeclarativeCMP({
            name: 'test',
            detectCmp: [{ exists: '#reject-all' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(1);
        expect(found[0].name).to.equal('test');
    });

    it('only matches the site-specific rule if urlPattern matches', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'runContextRule',
            runContext: { urlPattern: '^http://localhost' },
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        autoconsent.addDeclarativeCMP({
            name: 'test',
            detectCmp: [{ exists: '#reject-all' }],
            detectPopup: [],
            optIn: [],
            optOut: [],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(1);
        expect(found[0].name).to.equal('runContextRule');
    });

    it('matches with a known eval rule', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'Test page CMP',
            prehideSelectors: ['#reject-all'],
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            detectPopup: [{ visible: '#privacy-test-page-cmp-test' }],
            optIn: [],
            optOut: [{ waitFor: '#reject-all' }, { eval: 'EVAL_TESTCMP_STEP' }, { click: '#reject-all' }],
            test: [{ eval: 'EVAL_TESTCMP_0' }],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(1);
        expect(found[0].name).to.equal('Test page CMP');
    });

    it('Does not match if opt-out step contains unknown eval step', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'Test page CMP',
            prehideSelectors: ['#reject-all'],
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            detectPopup: [{ visible: '#privacy-test-page-cmp-test' }],
            optIn: [],
            // @ts-expect-error Testing unknown eval value
            optOut: [{ waitFor: '#reject-all' }, { eval: 'UNKNOWN_EVAL' }, { click: '#reject-all' }],
            test: [{ eval: 'EVAL_TESTCMP_0' }],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(0);
    });

    it('Does not match if detectPopup step contains unknown eval step', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'Test page CMP',
            prehideSelectors: ['#reject-all'],
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            // @ts-expect-error Testing unknown eval value
            detectPopup: [{ visible: '#privacy-test-page-cmp-test' }, { eval: 'UNKNOWN_EVAL' }],
            optIn: [],
            optOut: [{ waitFor: '#reject-all' }, { click: '#reject-all' }],
            test: [{ eval: 'EVAL_TESTCMP_0' }],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(0);
    });

    it('Does not match if optOut step contains unknown step property', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'Test page CMP',
            prehideSelectors: ['#reject-all'],
            detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
            detectPopup: [{ visible: '#privacy-test-page-cmp-test' }],
            optIn: [],
            // @ts-expect-error Testing unknown rulestep property
            optOut: [{ waitFor: '#reject-all', newOption: true }, { click: '#reject-all' }],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(0);
    });

    it('Does not match if detectCmp step contains unknown eval step', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'Test page CMP',
            prehideSelectors: ['#reject-all'],
            // @ts-expect-error Testing unknown eval value
            detectCmp: [{ eval: 'UNKNOWN_EVAL' }],
            detectPopup: [{ visible: '#privacy-test-page-cmp-test' }],
            optIn: [],
            optOut: [{ waitFor: '#reject-all' }, { click: '#reject-all' }],
            test: [{ eval: 'EVAL_TESTCMP_0' }],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(0);
    });

    it('Does not match if detectCmp step contains unknown eval step', async () => {
        autoconsent.addDeclarativeCMP({
            name: 'Test page CMP',
            prehideSelectors: ['#reject-all'],
            // @ts-expect-error Testing unknown eval value
            detectCmp: [{ newAction: 'test' }],
            detectPopup: [{ visible: '#privacy-test-page-cmp-test' }],
            optIn: [],
            optOut: [{ waitFor: '#reject-all' }, { click: '#reject-all' }],
            test: [{ eval: 'EVAL_TESTCMP_0' }],
        });
        const found = await autoconsent.findCmp(0);
        expect(found).to.have.length(0);
    });
});
