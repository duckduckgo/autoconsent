import { expect } from '@esm-bundle/chai';
import { getActionablePopups } from '../../lib/heuristics';
import { ButtonData, PopupHandlingModes } from '../../lib/types';

function rejectButtons(buttons: ButtonData[]) {
    return buttons.filter((b) => b.regexClassification === 'reject');
}

function nonRejectButtons(buttons: ButtonData[]) {
    return buttons.filter((b) => b.regexClassification !== 'reject');
}

// must be run from get-actionable-popups.html
describe('getActionablePopups', () => {
    function showPopup(id: string) {
        document.getElementById(id)?.classList.add('visible');
    }

    function hideAllPopups() {
        document.querySelectorAll('.popup').forEach((el) => el.classList.remove('visible'));
    }

    afterEach(() => {
        hideAllPopups();
    });

    it('finds cookie popup with reject button', () => {
        showPopup('popup-reject-all');

        const popups = getActionablePopups();

        expect(popups.length).to.equal(1);
        expect(rejectButtons(popups[0].buttons)).to.have.length(1);
        expect(rejectButtons(popups[0].buttons)[0].text).to.equal('Reject All');
    });

    describe('does not match non-cookie popups', () => {
        it('ignores popup without cookie-related text', () => {
            showPopup('popup-newsletter');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(0);
        });

        it('ignores popup with accept and settings buttons', () => {
            showPopup('popup-no-reject');

            const popups = getActionablePopups(PopupHandlingModes.Tier2);

            expect(popups.length).to.equal(0);
        });
    });

    describe('tier button candidates', () => {
        it('finds accept-only popup with no reject buttons', () => {
            showPopup('popup-accept-only');

            const popups = getActionablePopups(PopupHandlingModes.Tier2);

            expect(popups.length).to.equal(1);
            expect(rejectButtons(popups[0].buttons)).to.have.length(0);
            expect(popups[0].buttons.filter((b) => b.regexClassification === 'accept')).to.have.length(1);
        });

        it('finds acknowledge-only popup with no reject buttons', () => {
            showPopup('popup-acknowledge-only');

            const popups = getActionablePopups(PopupHandlingModes.Tier2);

            expect(popups.length).to.equal(1);
            expect(rejectButtons(popups[0].buttons)).to.have.length(0);
            expect(popups[0].buttons.filter((b) => b.regexClassification === 'acknowledge')).to.have.length(1);
        });

        it('ignores popup with multiple reject buttons', () => {
            showPopup('popup-multiple-reject');

            const popups = getActionablePopups(PopupHandlingModes.Tier2);

            expect(popups.length).to.equal(0);
        });
    });

    describe('mode filtering', () => {
        it('does not return accept-only popup when mode is Reject', () => {
            showPopup('popup-accept-only');

            const popups = getActionablePopups(PopupHandlingModes.Reject);

            expect(popups.length).to.equal(0);
        });

        it('returns acknowledge-only popup when mode is Tier1', () => {
            showPopup('popup-acknowledge-only');

            const popups = getActionablePopups(PopupHandlingModes.Tier1);

            expect(popups.length).to.equal(1);
            expect(popups[0].regexClassification).to.equal(PopupHandlingModes.Tier1);
        });

        it('does not return accept-only popup when mode is Tier1', () => {
            showPopup('popup-accept-only');

            const popups = getActionablePopups(PopupHandlingModes.Tier1);

            expect(popups.length).to.equal(0);
        });

        it('prefers reject popup when reject and accept popups are visible', () => {
            showPopup('popup-reject-all');
            showPopup('popup-accept-only');

            const popups = getActionablePopups(PopupHandlingModes.Tier2);

            expect(popups.length).to.equal(2);
            expect(popups[0].regexClassification).to.equal(PopupHandlingModes.Reject);
            expect(popups[1].regexClassification).to.equal(PopupHandlingModes.Tier2);
        });
    });

    describe('positioning', () => {
        it('finds fixed positioned popup', () => {
            showPopup('popup-reject-all');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
        });

        it('finds sticky positioned popup', () => {
            showPopup('popup-sticky');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
        });

        it('ignores static positioned elements', () => {
            showPopup('popup-static');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(0);
        });

        it('finds popup with role="dialog"', () => {
            showPopup('popup-role-dialog');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
        });

        it('finds popup with aria-modal="true"', () => {
            showPopup('popup-aria-modal');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
        });

        it('finds open <dialog> element', () => {
            const dialog = document.getElementById('popup-dialog-element') as HTMLDialogElement;
            dialog.show();
            dialog.classList.add('visible');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            dialog.close();
        });

        it('ignores closed <dialog> element', () => {
            const dialog = document.getElementById('popup-dialog-element') as HTMLDialogElement;
            dialog.classList.add('visible');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(0);
        });
    });

    describe('button classification', () => {
        it('separates reject buttons from other buttons', () => {
            showPopup('popup-multiple-buttons');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            expect(rejectButtons(popups[0].buttons)).to.have.length(1);
            expect(nonRejectButtons(popups[0].buttons)).to.have.length(3);
        });
    });
});
