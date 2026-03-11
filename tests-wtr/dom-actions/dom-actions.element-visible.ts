import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';
import { DomActions } from '../../lib/dom-actions';
import { isElementVisible } from '../../lib/utils';

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
            const el = document.querySelector('#hidden-display-none') as HTMLElement;
            expect(isElementVisible(el)).to.be.false;
        });

        it('should detect element hidden with visibility:hidden', () => {
            const el = document.querySelector('#hidden-visibility-hidden') as HTMLElement;
            expect(isElementVisible(el)).to.be.false;
        });

        it('should detect element hidden with visibility:collapse', () => {
            const el = document.querySelector('#hidden-visibility-collapse') as HTMLElement;
            expect(isElementVisible(el)).to.be.false;
        });

        it('should detect element hidden with opacity:0', () => {
            const el = document.querySelector('#hidden-opacity-zero') as HTMLElement;
            expect(isElementVisible(el)).to.be.false;
        });

        it('should detect element hidden with content-visibility:hidden', () => {
            const el = document.querySelector('#hidden-content-visibility') as HTMLElement;
            expect(isElementVisible(el)).to.be.false;
        });

        it('should detect a fully visible element', () => {
            const el = document.querySelector('#visible-element') as HTMLElement;
            expect(isElementVisible(el)).to.be.true;
        });

        it('should detect element hidden by ancestor with visibility:hidden', () => {
            const el = document.querySelector('#hidden-by-ancestor-visibility') as HTMLElement;
            expect(isElementVisible(el)).to.be.false;
        });

        it('should detect fixed-position element hidden with visibility:hidden', () => {
            const el = document.querySelector('#hidden-fixed-visibility') as HTMLElement;
            expect(isElementVisible(el)).to.be.false;
        });

        it('should detect fixed-position element hidden with display:none', () => {
            const el = document.querySelector('#hidden-fixed-display-none') as HTMLElement;
            expect(isElementVisible(el)).to.be.false;
        });

        it('should detect a visible fixed-position element', () => {
            const el = document.querySelector('#visible-fixed') as HTMLElement;
            expect(isElementVisible(el)).to.be.true;
        });

        it('should detect a visible child inside a visibility:hidden parent', () => {
            const el = document.querySelector('#visible-child-of-hidden') as HTMLElement;
            expect(isElementVisible(el)).to.be.true;
        });
    });
});
