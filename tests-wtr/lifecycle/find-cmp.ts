import { expect } from '@esm-bundle/chai';
import Autoconsent from '../../lib/web';
import Onetrust from '../../lib/cmps/onetrust';
import { ContentScriptMessage } from '../../lib/messages';

describe('Autoconsent.findCmp', () => {
    let autoconsent: Autoconsent;

    describe('heuristicMode = off', () => {
        beforeEach(() => {
            autoconsent = new Autoconsent((msg) => Promise.resolve(), {
                enabled: false, // bypass initialization
                autoAction: null,
                heuristicMode: 'off',
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

        it('does not match Onetrust for a hidden preference center without a banner', async () => {
            autoconsent.rules.push(new Onetrust(autoconsent));
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

        it('skips generic detection when the document exceeds the element limit', async () => {
            const messages: ContentScriptMessage[] = [];
            autoconsent = new Autoconsent(
                (msg) => {
                    messages.push(msg);
                    return Promise.resolve();
                },
                {
                    enabled: false,
                    autoAction: null,
                    heuristicMode: 'off',
                    maxDocumentElements: 1,
                },
            );
            autoconsent.addDeclarativeCMP({
                name: 'genericRule',
                detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
                detectPopup: [],
                optIn: [],
                optOut: [],
            });

            const found = await autoconsent.findCmp(0);
            const error = messages.find((message) => message.type === 'autoconsentError');

            expect(found).to.have.length(0);
            expect(error?.details.reason).to.equal('documentTooLarge');
        });

        it('still runs heuristic text detection when the document exceeds the element limit', async () => {
            autoconsent = new Autoconsent((msg) => Promise.resolve(), {
                enabled: false,
                autoAction: null,
                enableHeuristicDetection: true,
                heuristicMode: 'off',
                maxDocumentElements: 1,
            });

            const found = await autoconsent.findCmp(0);

            expect(found).to.have.length(0);
            expect(autoconsent.state.heuristicPatterns).not.to.have.length(0);
        });

        it('still runs matching site-specific rules when the document exceeds the element limit', async () => {
            autoconsent = new Autoconsent((msg) => Promise.resolve(), {
                enabled: false,
                autoAction: null,
                heuristicMode: 'off',
                maxDocumentElements: 1,
            });
            autoconsent.addDeclarativeCMP({
                name: 'siteSpecificRule',
                runContext: { urlPattern: '^http://localhost' },
                detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
                detectPopup: [],
                optIn: [],
                optOut: [],
            });

            const found = await autoconsent.findCmp(0);

            expect(found).to.have.length(1);
            expect(found[0].name).to.equal('siteSpecificRule');
        });

        it('runs generic detection when the document is below the element limit', async () => {
            autoconsent = new Autoconsent((msg) => Promise.resolve(), {
                enabled: false,
                autoAction: null,
                heuristicMode: 'off',
                maxDocumentElements: document.getElementsByTagName('*').length + 1,
            });
            autoconsent.addDeclarativeCMP({
                name: 'genericRule',
                detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
                detectPopup: [],
                optIn: [],
                optOut: [],
            });

            const found = await autoconsent.findCmp(0);

            expect(found).to.have.length(1);
            expect(found[0].name).to.equal('genericRule');
        });

        it('runs generic detection when the element limit is disabled', async () => {
            autoconsent = new Autoconsent((msg) => Promise.resolve(), {
                enabled: false,
                autoAction: null,
                heuristicMode: 'off',
                maxDocumentElements: 0,
            });
            autoconsent.addDeclarativeCMP({
                name: 'genericRule',
                detectCmp: [{ exists: '#privacy-test-page-cmp-test' }],
                detectPopup: [],
                optIn: [],
                optOut: [],
            });

            const found = await autoconsent.findCmp(0);

            expect(found).to.have.length(1);
            expect(found[0].name).to.equal('genericRule');
        });
    });

    describe('heuristicMode = reject', () => {
        beforeEach(() => {
            autoconsent = new Autoconsent((msg) => Promise.resolve(), {
                enabled: false,
                autoAction: null,
                heuristicMode: 'reject',
            });
        });

        afterEach(() => {
            const heuristicPopup = document.getElementById('heuristic-popup');
            if (heuristicPopup) {
                heuristicPopup.style.display = '';
            }
            document.getElementById('heuristic-popup-acknowledge-only')!.style.display = 'none';
            document.getElementById('heuristic-popup-accept-only')!.style.display = 'none';
        });

        it('returns heuristic CMP when no declarative rules match', async () => {
            autoconsent.addDeclarativeCMP({
                name: 'test',
                detectCmp: [{ exists: '#privacy-test-page-cmp-test-not-existing' }],
                detectPopup: [],
                optIn: [],
                optOut: [],
            });
            // force findCmpAttempts to 1 so heuristic CMP is run on the first attempt
            autoconsent.state.findCmpAttempts = 1;
            const found = await autoconsent.findCmp(1);

            expect(found).to.have.length(1);
            expect(found[0].name).to.equal('HEURISTIC-REJECT');
        });

        it('skips heuristic detection when the document exceeds the element limit', async () => {
            const messages: ContentScriptMessage[] = [];
            autoconsent = new Autoconsent(
                (msg) => {
                    messages.push(msg);
                    return Promise.resolve();
                },
                {
                    enabled: false,
                    autoAction: null,
                    heuristicMode: 'reject',
                    maxDocumentElements: 1,
                },
            );
            // force findCmpAttempts to 1 so heuristic CMP would be run on the first attempt
            autoconsent.state.findCmpAttempts = 1;

            const found = await autoconsent.findCmp(1);
            const error = messages.find((message) => message.type === 'autoconsentError');

            expect(found).to.have.length(0);
            expect(error?.details.reason).to.equal('documentTooLarge');
        });

        it('prefers declarative rules over heuristic CMP', async () => {
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

        it('returns HEURISTIC-TIER1 for acknowledge-only popup when mode is Tier1', async () => {
            document.getElementById('heuristic-popup')!.style.display = 'none';
            document.getElementById('heuristic-popup-acknowledge-only')!.style.display = 'block';

            autoconsent = new Autoconsent((msg) => Promise.resolve(), {
                enabled: false,
                autoAction: null,
                heuristicMode: 'tier1',
            });
            autoconsent.state.findCmpAttempts = 1;

            const found = await autoconsent.findCmp(1);

            expect(found).to.have.length(1);
            expect(found[0].name).to.equal('HEURISTIC-TIER1');
        });

        it('returns HEURISTIC-TIER2 for accept-only popup when mode is Tier2', async () => {
            document.getElementById('heuristic-popup')!.style.display = 'none';
            document.getElementById('heuristic-popup-accept-only')!.style.display = 'block';

            autoconsent = new Autoconsent((msg) => Promise.resolve(), {
                enabled: false,
                autoAction: null,
                heuristicMode: 'tier2',
            });
            autoconsent.state.findCmpAttempts = 1;

            const found = await autoconsent.findCmp(1);

            expect(found).to.have.length(1);
            expect(found[0].name).to.equal('HEURISTIC-TIER2');
        });
    });
});
