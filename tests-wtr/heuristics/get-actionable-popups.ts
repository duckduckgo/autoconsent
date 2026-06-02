import { expect } from '@esm-bundle/chai';
import { HeuristicPopupIndex } from '../../lib/heuristic-popup-index';

// must be run from get-actionable-popups.html
describe('HeuristicPopupIndex', () => {
    async function queryPopups() {
        const index = new HeuristicPopupIndex();
        const popups = await index.getActionablePopups();
        index.disableObserver();
        return popups;
    }

    function showPopup(id: string) {
        document.getElementById(id)?.classList.add('visible');
    }

    function hideAllPopups() {
        document.querySelectorAll('.popup').forEach((el) => el.classList.remove('visible'));
    }

    afterEach(() => {
        hideAllPopups();
    });

    it('finds cookie popup with reject button', async () => {
        showPopup('popup-reject-all');

        const popups = await queryPopups();

        expect(popups.length).to.equal(1);
        expect(popups[0].rejectButtons?.length).to.equal(1);
        expect(popups[0].rejectButtons?.[0].text).to.equal('Reject All');
    });

    describe('does not match non-cookie popups', () => {
        it('ignores popup without cookie-related text', async () => {
            showPopup('popup-newsletter');

            const popups = await queryPopups();

            expect(popups.length).to.equal(0);
        });

        it('ignores popup without reject button', async () => {
            showPopup('popup-no-reject');

            const popups = await queryPopups();

            expect(popups.length).to.equal(0);
        });
    });

    describe('positioning', () => {
        it('finds fixed positioned popup', async () => {
            showPopup('popup-reject-all');

            const popups = await queryPopups();

            expect(popups.length).to.equal(1);
        });

        it('finds sticky positioned popup', async () => {
            showPopup('popup-sticky');

            const popups = await queryPopups();

            expect(popups.length).to.equal(1);
        });

        it('ignores static positioned elements', async () => {
            showPopup('popup-static');

            const popups = await queryPopups();

            expect(popups.length).to.equal(0);
        });

        it('finds popup with role="dialog"', async () => {
            showPopup('popup-role-dialog');

            const popups = await queryPopups();

            expect(popups.length).to.equal(1);
        });

        it('finds popup with aria-modal="true"', async () => {
            showPopup('popup-aria-modal');

            const popups = await queryPopups();

            expect(popups.length).to.equal(1);
        });

        it('finds open <dialog> element', async () => {
            const dialog = document.getElementById('popup-dialog-element') as HTMLDialogElement;
            dialog.show();
            dialog.classList.add('visible');

            const popups = await queryPopups();

            expect(popups.length).to.equal(1);
            dialog.close();
        });

        it('ignores closed <dialog> element', async () => {
            const dialog = document.getElementById('popup-dialog-element') as HTMLDialogElement;
            dialog.classList.add('visible');

            const popups = await queryPopups();

            expect(popups.length).to.equal(0);
        });
    });

    describe('button classification', () => {
        it('separates reject buttons from other buttons', async () => {
            showPopup('popup-multiple-buttons');

            const popups = await queryPopups();

            expect(popups.length).to.equal(1);
            expect(popups[0].rejectButtons?.length).to.equal(1);
            expect(popups[0].otherButtons?.length).to.equal(3);
        });
    });

    describe('incremental cache', () => {
        it('reuses cache on subsequent reads without DOM changes', async () => {
            showPopup('popup-reject-all');

            const index = new HeuristicPopupIndex();
            const scanSpy = index.scan.bind(index);
            let scanCount = 0;
            index.scan = async () => {
                scanCount++;
                return scanSpy();
            };

            await index.getActionablePopups();
            await index.getActionablePopups();

            expect(scanCount).to.equal(1);

            index.disableObserver();
        });

        it('detects a popup added after the initial scan', async () => {
            const index = new HeuristicPopupIndex();
            await index.scan();

            expect((await index.getActionablePopups()).length).to.equal(0);

            showPopup('popup-reject-all');
            await new Promise((resolve) => setTimeout(resolve, 0));
            await index.flushUpdates();

            const popups = await index.getActionablePopups();
            expect(popups.length).to.equal(1);

            index.disableObserver();
        });

        it('clears removed popup candidates from the cache', async () => {
            showPopup('popup-reject-all');

            const index = new HeuristicPopupIndex();
            expect((await index.getActionablePopups()).length).to.equal(1);

            hideAllPopups();
            document.getElementById('popup-reject-all')?.remove();
            await new Promise((resolve) => setTimeout(resolve, 0));
            await index.flushUpdates();

            expect((await index.getActionablePopups()).length).to.equal(0);

            index.disableObserver();
        });
    });
});
