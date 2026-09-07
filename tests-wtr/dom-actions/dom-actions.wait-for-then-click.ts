import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';

// A short interval keeps the tests fast; the retry loop polls every 50ms regardless.
const RETRY_INTERVAL = 50;

// must be run from dom-actions.wait-for-then-click.html
describe('waitForThenClick', () => {
    let clicks: number;

    /**
     * Adds a button that hides itself once it has been clicked `handledAfterClicks` times.
     * `handledAfterClicks: 0` simulates a button whose click handler is never effective.
     */
    function addButton(handledAfterClicks: number): HTMLElement {
        const button = document.createElement('button');
        button.id = 'target';
        button.innerText = 'Click me';
        button.addEventListener('click', () => {
            clicks++;
            if (handledAfterClicks > 0 && clicks >= handledAfterClicks) {
                button.style.display = 'none';
            }
        });
        document.getElementById('container')!.appendChild(button);
        return button;
    }

    beforeEach(() => {
        clicks = 0;
    });

    afterEach(() => {
        document.getElementById('container')!.innerHTML = '';
    });

    it('should click once and not retry by default', async () => {
        const domActions = instantiateDomActions();
        addButton(0);

        const result = await domActions.waitForThenClick('#target');

        expect(result).to.be.true;
        expect(clicks).to.equal(1);
    });

    it('should retry while the element is still visible', async () => {
        const domActions = instantiateDomActions();
        addButton(0);

        const result = await domActions.waitForThenClick('#target', 10000, false, 2, RETRY_INTERVAL);

        expect(result).to.be.true;
        expect(clicks).to.equal(3); // the first click plus two retries
    });

    it('should stop retrying as soon as the click is handled', async () => {
        const domActions = instantiateDomActions();
        addButton(2); // the first click is dropped, the second one hides the button

        const result = await domActions.waitForThenClick('#target', 10000, false, 5, RETRY_INTERVAL);

        expect(result).to.be.true;
        expect(clicks).to.equal(2);
    });

    it('should not retry if the element disappears on the first click', async () => {
        const domActions = instantiateDomActions();
        addButton(1);

        const result = await domActions.waitForThenClick('#target', 10000, false, 5, RETRY_INTERVAL);

        expect(result).to.be.true;
        expect(clicks).to.equal(1);
    });

    it('should not retry when retries is 0', async () => {
        const domActions = instantiateDomActions();
        addButton(0);

        const result = await domActions.waitForThenClick('#target', 10000, false, 0, RETRY_INTERVAL);

        expect(result).to.be.true;
        expect(clicks).to.equal(1);
    });

    it('should not retry if the element never appeared', async () => {
        const domActions = instantiateDomActions();

        const result = await domActions.waitForThenClick('#nonexistent', 100, false, 5, RETRY_INTERVAL);

        expect(result).to.be.false;
        expect(clicks).to.equal(0);
    });

    it('should retry all matching elements when all is true', async () => {
        const domActions = instantiateDomActions();
        addButton(0);
        addButton(0);

        const result = await domActions.waitForThenClick('#target', 10000, true, 1, RETRY_INTERVAL);

        expect(result).to.be.true;
        expect(clicks).to.equal(4); // two elements, clicked twice each
    });
});
