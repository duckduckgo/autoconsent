import { expect } from '@esm-bundle/chai';
import { DomActions } from '../../../lib/dom-actions';
import { instantiateDomActions } from '../utils';

// must be run from dom-actions.prehide.invalid-selector.html
describe('prehide', () => {
    let domActions: DomActions;

    beforeEach(() => {
        // Given
        domActions = instantiateDomActions();
    });

    it('still prehides valid selectors when one selector in the list is invalid', () => {
        // Given
        expect(document.getElementById('first').checkVisibility({ checkOpacity: true })).to.be.true; // establish baseline to prevent false positive
        expect(document.getElementById('second').checkVisibility({ checkOpacity: true })).to.be.true;
        const invalid = 'div:has(> div:has(> a))'; // :has() cannot be nested
        expect(() => document.querySelector(invalid)).to.throw();

        // When
        const result = domActions.prehide(['#first', invalid, '#second']);

        // Then
        expect(result).to.be.true;
        expect(document.getElementById('first').checkVisibility({ checkOpacity: true })).to.be.false;
        expect(document.getElementById('second').checkVisibility({ checkOpacity: true })).to.be.false;
    });
});
