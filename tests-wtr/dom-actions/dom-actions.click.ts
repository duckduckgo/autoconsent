import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';

// must be run from dom-actions.click.html
describe('click', () => {
    let clickCounter1: number;
    let clickCounter2: number;

    before(() => {
        document.querySelector('#first > button')?.addEventListener('click', () => {
            clickCounter1++;
        });
        document.querySelector('#second > button')?.addEventListener('click', () => {
            clickCounter2++;
        });
    });

    beforeEach(() => {
        clickCounter1 = 0;
        clickCounter2 = 0;
    });

    it('clicks on a button', async () => {
        const domActions = instantiateDomActions();

        // with selector
        expect(await domActions.click('#test')).true;
        expect(clickCounter1).to.equal(1);
    });

    it('clicks all upon multiple matches when all=true', async () => {
        const domActions = instantiateDomActions();

        // with selector
        expect(await domActions.click('button', true)).true;
        expect(clickCounter1).to.equal(1);
        expect(clickCounter2).to.equal(1);
    });

    it('clicks only first one upon multiple matches when all=false', async () => {
        const domActions = instantiateDomActions();

        // with selector
        expect(await domActions.click('button')).true;
        expect(clickCounter1).to.equal(1);
        expect(clickCounter2).to.equal(0);
    });

    it('returns false when no elements match', async () => {
        const domActions = instantiateDomActions();

        // with non-matching selector
        expect(await domActions.click('#nonexistent')).false;
        expect(clickCounter1).to.equal(0);
        expect(clickCounter2).to.equal(0);
    });

    it('clicks by chained selector', async () => {
        const domActions = instantiateDomActions();
        const clickedSuccessfully = await domActions.click(['#second', 'button']);

        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(0);
        expect(clickCounter2).to.equal(1);
    });

    it('clicks by xpath selector', async () => {
        const domActions = instantiateDomActions();
        const clickedSuccessfully = await domActions.click(['xpath///*[@id="second"]/button']);

        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(0);
        expect(clickCounter2).to.equal(1);
    });

    it('clicks an open shadow dom element', async () => {
        const domActions = instantiateDomActions();
        let clickCounterShadowRoot = 0;

        // dynamically create a shadow DOM with a button
        const shadowDiv = document.createElement('div');
        shadowDiv.id = 'shadow';
        document.body.appendChild(shadowDiv);
        const shadow = shadowDiv.attachShadow({ mode: 'open' });
        const shadowButton = document.createElement('button');
        shadow.appendChild(shadowButton);
        shadowButton.addEventListener('click', () => {
            clickCounterShadowRoot++;
        });

        // chained selector pierces into shadow root
        const clickedSuccessfully = await domActions.click(['#shadow', 'button']);

        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(0);
        expect(clickCounter2).to.equal(0);
        expect(clickCounterShadowRoot).to.equal(1);
    });
});
