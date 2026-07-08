import { expect } from '@esm-bundle/chai';
import Autoconsent from '../../lib/web';
import { AutoConsentHeuristicCMP } from '../../lib/cmps/base';
import { HeuristicLevel } from '../../lib/types';

// must be run from heuristic-cmp.html
describe('AutoConsentHeuristicCMP', () => {
    function createAutoconsent(heuristicMode: HeuristicLevel) {
        return new Autoconsent(() => Promise.resolve(), {
            enabled: false,
            autoAction: null,
            heuristicMode,
        });
    }

    function showPopup(...ids: string[]) {
        hideAllPopups();
        for (const id of ids) {
            document.getElementById(id)?.classList.add('visible');
        }
    }

    function hideAllPopups() {
        document.querySelectorAll('.popup').forEach((el) => el.classList.remove('visible'));
    }

    afterEach(() => {
        hideAllPopups();
    });

    describe('detectCmp', () => {
        it('detects reject popup as HEURISTIC-REJECT', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-reject');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.true;
            expect(cmp.name).to.equal('HEURISTIC-REJECT');
        });

        it('detects acknowledge-only popup as HEURISTIC-TIER1', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-acknowledge-only');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.true;
            expect(cmp.name).to.equal('HEURISTIC-TIER1');
        });

        it('detects accept-only popup as HEURISTIC-TIER2', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-accept-only');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.true;
            expect(cmp.name).to.equal('HEURISTIC-TIER2');
        });

        it('does not detect popup with accept and settings buttons', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-accept-settings');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.false;
        });

        it('detects popup with multiple reject buttons as HEURISTIC-REJECT', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-multiple-reject');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.true;
            expect(cmp.name).to.equal('HEURISTIC-REJECT');
        });

        it('prefers reject popup when reject and accept popups are visible', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-tier-preference-reject', 'popup-tier-preference-accept');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.true;
            expect(cmp.name).to.equal('HEURISTIC-REJECT');
        });
    });

    describe('heuristicMode cap', () => {
        it('does not detect accept-only popup when mode is Reject', async () => {
            const autoconsent = createAutoconsent('reject');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'reject');
            showPopup('popup-accept-only');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.false;
        });

        it('detects acknowledge-only popup when mode is Tier1', async () => {
            const autoconsent = createAutoconsent('tier1');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier1');
            showPopup('popup-acknowledge-only');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.true;
            expect(cmp.name).to.equal('HEURISTIC-TIER1');
        });

        it('does not detect accept-only popup when mode is Tier1', async () => {
            const autoconsent = createAutoconsent('tier1');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier1');
            showPopup('popup-accept-only');

            const detected = await cmp.detectCmp();

            expect(detected).to.be.false;
        });
    });

    describe('optOut', () => {
        it('clicks the reject button for REJECT popup', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-reject');
            await cmp.detectCmp();

            const target = cmp.getTargetButton();
            expect(target?.regexClassification).to.equal('reject');

            const result = await cmp.optOut();

            expect(result).to.be.true;
            expect(autoconsent.state.clicks).to.equal(1);
        });

        it('clicks the acknowledge button for TIER1 popup', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-acknowledge-only');
            await cmp.detectCmp();

            const target = cmp.getTargetButton();
            expect(target?.regexClassification).to.equal('acknowledge');

            const result = await cmp.optOut();

            expect(result).to.be.true;
            expect(autoconsent.state.clicks).to.equal(1);
        });

        it('clicks the accept button for TIER2 popup', async () => {
            const autoconsent = createAutoconsent('tier2');
            const cmp = new AutoConsentHeuristicCMP(autoconsent, 'tier2');
            showPopup('popup-accept-only');
            await cmp.detectCmp();

            const target = cmp.getTargetButton();
            expect(target?.regexClassification).to.equal('accept');

            const result = await cmp.optOut();

            expect(result).to.be.true;
            expect(autoconsent.state.clicks).to.equal(1);
        });
    });
});
