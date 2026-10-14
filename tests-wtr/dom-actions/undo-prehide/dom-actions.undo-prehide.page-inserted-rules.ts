import { expect } from '@esm-bundle/chai';
import { DomActions } from '../../../lib/dom-actions';
import { instantiateDomActions } from '../utils';

// must be run from dom-actions.undo-prehide.page-inserted-rules.html
describe('undoPrehide', () => {
    let domActions: DomActions;

    beforeEach(() => {
        // Given
        domActions = instantiateDomActions();
    });

    it('keeps rules the page inserted into the prehide style element', () => {
        // Given: the page styles itself through the first <style> in the document, which is ours
        document.querySelector('style')!.sheet!.insertRule('#field { opacity: 1; }', 0);
        expect(getComputedStyle(document.getElementById('field')!).opacity).to.equal('1');

        // When
        domActions.undoPrehide();

        // Then
        expect(document.querySelector('style#autoconsent-prehide')).to.be.null;
        const rules = Array.from(document.querySelector('style')!.sheet!.cssRules) as CSSStyleRule[];
        expect(rules.map((r) => r.selectorText)).to.deep.equal(['#field']);
        expect(getComputedStyle(document.getElementById('field')!).opacity).to.equal('1');
    });
});
