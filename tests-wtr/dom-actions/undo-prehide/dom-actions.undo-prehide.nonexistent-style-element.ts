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

    it('returns false when element does not exist', () => {
        // Given
        expect(document.querySelector('style#autoconsent-prehide')).to.be.null; // check that style element does not yet exist

        // When
        const result = domActions.undoPrehide();

        // Then
        expect(result).to.be.false;
    });
});
