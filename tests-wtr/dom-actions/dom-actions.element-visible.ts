import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';
import { DomActions } from '../../lib/dom-actions';

// must be run from dom-actions.element-visible.html
describe('elementVisible', () => {
    let domActions: DomActions;

    beforeEach(() => {
        domActions = instantiateDomActions();
    });

    describe('mode: "none"', () => {
        it('should return true if no elements found', () => {
            // with non-matching selector / empty element list
            expect(domActions.elementVisible('#not-found', 'none')).to.be.true;
            expect(domActions.elementVisible([], 'none')).to.be.true;
        });
        it('should return false if all elements are visible', () => {
            expect(domActions.elementVisible(['#all-visible', 'button'], 'none')).to.be.false;
        });
        it('should return false if some elements are visible', () => {
            expect(domActions.elementVisible(['#some-visible', 'button'], 'none')).to.be.false;
        });
        it('should return true if no elements are visible', () => {
            expect(domActions.elementVisible(['#none-visible', 'button'], 'none')).to.be.true;
        });
    });

    describe('mode: "any"', () => {
        it('should return false if no elements found', () => {
            // with non-matching selector / empty element list
            expect(domActions.elementVisible('#not-found', 'any')).to.be.false;
            expect(domActions.elementVisible([], 'any')).to.be.false;
        });
        it('should return false if no elements are visible', () => {
            expect(domActions.elementVisible(['#none-visible', 'button'], 'any')).to.be.false;
        });
        it('should return true if some elements are visible', () => {
            expect(domActions.elementVisible(['#some-visible', 'button'], 'any')).to.be.true;
        });
        it('should return true if all elements are visible', () => {
            expect(domActions.elementVisible(['#all-visible', 'button'], 'any')).to.be.true;
        });
    });

    describe('mode: "all"', () => {
        it('should return false if no elements found', () => {
            // with non-matching selector / empty element list
            expect(domActions.elementVisible('#not-found', 'all')).to.be.false;
            expect(domActions.elementVisible([], 'all')).to.be.false;
        });
        it('should return false if no elements are visible', () => {
            expect(domActions.elementVisible(['#none-visible', 'button'], 'all')).to.be.false;
        });
        it('should return false if some elements are visible', () => {
            expect(domActions.elementVisible(['#some-visible', 'button'], 'all')).to.be.false;
        });
        it('should return true if all elements are visible', () => {
            expect(domActions.elementVisible(['#all-visible', 'button'], 'all')).to.be.true;
        });
    });

    describe('hiding methods', () => {
        it('should detect element hidden with display:none', () => {
            expect(domActions.elementVisible('#hidden-display-none', 'any')).to.be.false;
        });

        it('should detect element hidden with visibility:hidden', () => {
            expect(domActions.elementVisible('#hidden-visibility-hidden', 'any')).to.be.false;
        });

        it('should detect element hidden with visibility:collapse', () => {
            expect(domActions.elementVisible('#hidden-visibility-collapse', 'any')).to.be.false;
        });

        it('should detect element hidden with opacity:0', () => {
            expect(domActions.elementVisible('#hidden-opacity-zero', 'any')).to.be.false;
        });

        it('should detect element with content-visibility:hidden as visible (only content is hidden, element itself has a box)', () => {
            expect(domActions.elementVisible('#hidden-content-visibility', 'any')).to.be.true;
        });

        it('should detect a fully visible element', () => {
            expect(domActions.elementVisible('#visible-element', 'any')).to.be.true;
        });

        it('should detect element hidden by ancestor with visibility:hidden', () => {
            expect(domActions.elementVisible('#hidden-by-ancestor-visibility', 'any')).to.be.false;
        });

        it('should detect fixed-position element hidden with visibility:hidden', () => {
            expect(domActions.elementVisible('#hidden-fixed-visibility', 'any')).to.be.false;
        });

        it('should detect fixed-position element hidden with display:none', () => {
            expect(domActions.elementVisible('#hidden-fixed-display-none', 'any')).to.be.false;
        });

        it('should detect a visible fixed-position element', () => {
            expect(domActions.elementVisible('#visible-fixed', 'any')).to.be.true;
        });

        it('should detect a visible child inside a visibility:hidden parent', () => {
            expect(domActions.elementVisible('#visible-child-of-hidden', 'any')).to.be.true;
        });

        it('should detect element hidden by ancestor with opacity:0', () => {
            expect(domActions.elementVisible('#hidden-by-ancestor-opacity', 'any')).to.be.false;
        });

        it('should detect element hidden by ancestor with content-visibility:hidden', () => {
            expect(domActions.elementVisible('#hidden-by-ancestor-content-visibility', 'any')).to.be.false;
        });
    });

    describe('prehide interaction', () => {
        afterEach(() => {
            const prehideStyle = document.querySelector('style#autoconsent-prehide');
            if (prehideStyle) {
                prehideStyle.remove();
            }
        });

        it('should report a prehidden visible element as still visible', () => {
            expect(domActions.elementVisible('#prehide-target-visible', 'any')).to.be.true;
            domActions.prehide('#prehide-target-visible');
            expect(domActions.elementVisible('#prehide-target-visible', 'any')).to.be.true;
        });

        it('should report an already-hidden element as not visible even after prehide', () => {
            expect(domActions.elementVisible('#prehide-target-hidden', 'any')).to.be.false;
            domActions.prehide('#prehide-target-hidden');
            expect(domActions.elementVisible('#prehide-target-hidden', 'any')).to.be.false;
        });

        it('should report a visible element as visible after undoPrehide', () => {
            domActions.prehide('#prehide-target-visible');
            expect(domActions.elementVisible('#prehide-target-visible', 'any')).to.be.true;
            domActions.undoPrehide();
            expect(domActions.elementVisible('#prehide-target-visible', 'any')).to.be.true;
        });
    });
});
