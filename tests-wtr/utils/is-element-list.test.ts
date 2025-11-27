import { expect } from '@esm-bundle/chai';
import { isElementList } from '../../lib/utils';

describe('isElementList', () => {
    it('returns true for array of HTMLElements', () => {
        const div = document.createElement('div');
        expect(isElementList([div])).to.be.true;
    });

    it('returns true for array of multiple HTMLElements', () => {
        const div = document.createElement('div');
        const button = document.createElement('button');
        expect(isElementList([div, button])).to.be.true;
    });

    it('returns false for empty array', () => {
        // empty arrays are ambiguous but treated as selector (since first element is not HTMLElement)
        expect(isElementList([])).to.be.false;
    });

    it('returns false for string selector', () => {
        expect(isElementList('#test-element')).to.be.false;
    });

    it('returns false for array of string selectors (chained selector)', () => {
        expect(isElementList(['#parent', '.child'])).to.be.false;
    });

    it('returns false for single-element chained selector', () => {
        expect(isElementList(['button'])).to.be.false;
    });
});

