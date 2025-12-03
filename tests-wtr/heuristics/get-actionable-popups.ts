import { expect } from '@esm-bundle/chai';
import { getActionablePopups } from '../../lib/heuristics';

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
        expect(popups[0].rejectButtons?.length).to.equal(1);
        expect(popups[0].rejectButtons?.[0].text).to.equal('Reject All');
    });

    describe('does not match non-cookie popups', () => {
        it('ignores popup without cookie-related text', () => {
            showPopup('popup-newsletter');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(0);
        });

        it('ignores popup without reject button', () => {
            showPopup('popup-no-reject');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(0);
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
    });

    describe('button classification', () => {
        it('separates reject buttons from other buttons', () => {
            showPopup('popup-multiple-buttons');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            expect(popups[0].rejectButtons?.length).to.equal(1);
            expect(popups[0].otherButtons?.length).to.equal(3);
        });
    });
});
