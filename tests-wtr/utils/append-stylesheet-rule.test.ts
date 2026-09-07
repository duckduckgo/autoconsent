import { expect } from '@esm-bundle/chai';
import { appendStylesheetRule } from '../../lib/utils';

describe('appendStylesheetRule', () => {
    let styleEl: HTMLStyleElement;

    beforeEach(() => {
        styleEl = document.createElement('style');
        document.head.appendChild(styleEl);
    });

    afterEach(() => {
        styleEl.remove();
    });

    it('appends a CSS rule to the stylesheet', () => {
        const result = appendStylesheetRule(styleEl, 'html.locked body { overflow: auto !important; }', 'scroll-unlock');
        expect(result).to.be.true;
        expect(styleEl.innerText).to.include('overflow: auto !important');
        expect(styleEl.innerText).to.include('/* autoconsent:scroll-unlock */');
    });

    it('is idempotent when called with the same marker', () => {
        appendStylesheetRule(styleEl, 'html.locked body { overflow: auto !important; }', 'scroll-unlock');
        const lengthAfterFirst = styleEl.innerText.length;
        appendStylesheetRule(styleEl, 'html.locked body { overflow: auto !important; }', 'scroll-unlock');
        expect(styleEl.innerText.length).to.equal(lengthAfterFirst);
    });
});
