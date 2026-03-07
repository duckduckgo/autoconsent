import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';

describe('removeClass', () => {
    const domActions = instantiateDomActions();

    afterEach(() => {
        document.getElementById('target')!.className = 'foo bar baz';
        document.getElementById('multi-a')!.className = 'scroll-lock overlay';
        document.getElementById('multi-b')!.className = 'scroll-lock overlay';
    });

    it('removes a class from a single element', () => {
        const result = domActions.removeClass('#target', 'bar');
        expect(result).to.be.true;
        const el = document.getElementById('target')!;
        expect(el.classList.contains('bar')).to.be.false;
        expect(el.classList.contains('foo')).to.be.true;
        expect(el.classList.contains('baz')).to.be.true;
    });

    it('removes a class from multiple matching elements', () => {
        const result = domActions.removeClass('.scroll-lock', 'scroll-lock');
        expect(result).to.be.true;
        expect(document.getElementById('multi-a')!.classList.contains('scroll-lock')).to.be.false;
        expect(document.getElementById('multi-b')!.classList.contains('scroll-lock')).to.be.false;
        expect(document.getElementById('multi-a')!.classList.contains('overlay')).to.be.true;
    });

    it('returns false when no elements match', () => {
        const result = domActions.removeClass('#nonexistent', 'foo');
        expect(result).to.be.false;
    });

    it('succeeds even if class is not present on element', () => {
        const result = domActions.removeClass('#target', 'nonexistent-class');
        expect(result).to.be.true;
        expect(document.getElementById('target')!.className).to.equal('foo bar baz');
    });

    it('works with chained selectors (shadow DOM piercing)', () => {
        const wrapper = document.createElement('div');
        wrapper.id = 'shadow-host-rc';
        document.body.appendChild(wrapper);
        const shadow = wrapper.attachShadow({ mode: 'open' });
        const inner = document.createElement('div');
        inner.className = 'lock active';
        shadow.appendChild(inner);

        const result = domActions.removeClass(['#shadow-host-rc', '.lock'], 'lock');
        expect(result).to.be.true;
        expect(inner.classList.contains('lock')).to.be.false;
        expect(inner.classList.contains('active')).to.be.true;

        wrapper.remove();
    });
});
