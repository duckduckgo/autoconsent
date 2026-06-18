import { expect } from '@esm-bundle/chai';
import { getActionablePopups } from '../../lib/heuristics';
import { ButtonData } from '../../lib/types';

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

        it('finds popup with cookie text even without reject button', () => {
            showPopup('popup-no-reject');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            expect(rejectButtons(popups[0].buttons)).to.have.length(0);
            expect(popups[0].buttons.map((b) => b.regexClassification)).to.include('accept');
            expect(popups[0].buttons.map((b) => b.regexClassification)).to.include('settings');
        });
    });

    describe('tier button candidates', () => {
        it('finds accept-only popup with no reject buttons', () => {
            showPopup('popup-accept-only');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            expect(rejectButtons(popups[0].buttons)).to.have.length(0);
            expect(popups[0].buttons.filter((b) => b.regexClassification === 'accept')).to.have.length(1);
        });

        it('finds acknowledge-only popup with no reject buttons', () => {
            showPopup('popup-acknowledge-only');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            expect(rejectButtons(popups[0].buttons)).to.have.length(0);
            expect(popups[0].buttons.filter((b) => b.regexClassification === 'acknowledge')).to.have.length(1);
        });

        it('finds popup with multiple reject buttons', () => {
            showPopup('popup-multiple-reject');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            expect(rejectButtons(popups[0].buttons)).to.have.length(2);
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
