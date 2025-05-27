import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';

// must be run from dom-actions.click.html
describe('click', () => {
    let clickCounter1: number;
    let clickCounter2: number;

    before(() => {
        document.querySelector('#first > button').addEventListener('click', () => {
            clickCounter1++;
        });
        document.querySelector('#second > button').addEventListener('click', () => {
            clickCounter2++;
        });
    });

    beforeEach(() => {
        clickCounter1 = 0;
        clickCounter2 = 0;
    });

    it('clicks on a button', async () => {
        // Given
        const domActions = instantiateDomActions();

        // When
        const clickedSuccessfully = await domActions.click('#test');

        // Then
        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(1);
    });

    it('clicks all upon multiple matches when all=true', async () => {
        // Given
        const domActions = instantiateDomActions();

        // When
        const clickedSuccessfully = await domActions.click('button', true);

        // Then
        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(1);
        expect(clickCounter2).to.equal(1);
    });

    it('clicks only first one upon multiple matches when all=false', async () => {
        // Given
        const domActions = instantiateDomActions();

        // When
        const clickedSuccessfully = await domActions.click('button');

        // Then
        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(1);
        expect(clickCounter2).to.equal(0);
    });

    it('clicks by chained selector', async () => {
        // Given
        const domActions = instantiateDomActions();

        // When
        const clickedSuccessfully = await domActions.click(['#second', 'button']);

        // Then
        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(0);
        expect(clickCounter2).to.equal(1);
    });

    it('clicks by xpath selector', async () => {
        // Given
        const domActions = instantiateDomActions();

        // When
        const clickedSuccessfully = await domActions.click(['xpath///*[@id="second"]/button']);

        // Then
        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(0);
        expect(clickCounter2).to.equal(1);
    });

    it('clicks an open shadow dom element', async () => {
        // Given
        const domActions = instantiateDomActions();

        let clickCounterShadowRoot = 0;

        const shadowDiv = document.createElement('div');
        shadowDiv.id = 'shadow';
        document.body.appendChild(shadowDiv);
        const shadow = shadowDiv.attachShadow({ mode: 'open' });
        const shadowButton = document.createElement('button');
        shadow.appendChild(shadowButton);
        shadowButton.addEventListener('click', () => {
            clickCounterShadowRoot++;
        });

        // When
        const clickedSuccessfully = await domActions.click(['#shadow', 'button']);

        // Then
        expect(clickedSuccessfully).true;
        expect(clickCounter1).to.equal(0);
        expect(clickCounter2).to.equal(0);
        expect(clickCounterShadowRoot).to.equal(1);
    });
});
