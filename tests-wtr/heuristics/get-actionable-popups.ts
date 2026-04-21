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
            expect(popups[0].rejectButtons?.length).to.equal(1);
            expect(popups[0].otherButtons?.length).to.equal(3);
        });
    });

    describe('shadow DOM', () => {
        const slot = document.getElementById('shadow-popup-slot')!;

        afterEach(() => {
            slot.innerHTML = '';
        });

        it('finds cookie popup rendered inside an open shadow root', () => {
            slot.innerHTML = '<shadow-cookie-popup></shadow-cookie-popup>';

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            expect(popups[0].rejectButtons?.length).to.equal(1);
            expect(popups[0].rejectButtons?.[0].text).to.equal('Reject All');
            expect(popups[0].otherButtons?.length).to.equal(1);
            expect(popups[0].otherButtons?.[0].text).to.equal('Accept All');
        });

        it('ignores shadow-rooted popup without cookie-related text', () => {
            slot.innerHTML = '<shadow-no-cookie-text></shadow-no-cookie-text>';

            const popups = getActionablePopups();

            expect(popups.length).to.equal(0);
        });

        it('ignores shadow-rooted cookie popup without a reject button', () => {
            slot.innerHTML = '<shadow-cookie-no-reject></shadow-cookie-no-reject>';

            const popups = getActionablePopups();

            expect(popups.length).to.equal(0);
        });

        it('does not let a nested shadow-rooted widget cause the real popup to be dropped', () => {
            showPopup('popup-with-nested-shadow');

            const popups = getActionablePopups();

            expect(popups.length).to.equal(1);
            expect(popups[0].element.id).to.equal('popup-with-nested-shadow');
            expect(popups[0].rejectButtons?.length).to.equal(1);
            expect(popups[0].rejectButtons?.[0].text).to.equal('Reject All');
        });
    });
});
