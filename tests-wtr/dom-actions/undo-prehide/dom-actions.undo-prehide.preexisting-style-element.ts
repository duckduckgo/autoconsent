import { expect } from '@esm-bundle/chai';
import { DomActions } from '../../../lib/dom-actions';
import { instantiateDomActions } from '../utils';

// must be run from dom-actions.prehide.empty-selector.html
describe('undoPrehide', () => {
    let domActions: DomActions;

    beforeEach(() => {
        // Given
        domActions = instantiateDomActions();
    });

    it('empties preexisting style element without removing it', () => {
        // Given
        const styleEl = document.querySelector('style#autoconsent-prehide');
        expect(styleEl).to.not.be.null; // check that style element already exists
        expect(styleEl?.textContent).to.include('opacity: 0');

        // When
        domActions.undoPrehide();

        // Then
        expect(document.querySelector('style#autoconsent-prehide')).to.equal(styleEl); // check that style element was kept in place
        expect(styleEl?.textContent).to.equal(''); // check that hiding rules were cleared
    });
});
