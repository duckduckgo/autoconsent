import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';

describe('setStyle', () => {
    const domActions = instantiateDomActions();

    afterEach(() => {
        document.getElementById('target')!.style.cssText = 'color: red; margin: 10px;';
        document.querySelectorAll('.styled').forEach((el) => {
            (el as HTMLElement).style.cssText = 'overflow: hidden;';
        });
    });

    it('replaces the entire inline style', () => {
        const result = domActions.setStyle('#target', 'overflow: auto');
        expect(result).to.be.true;
        const el = document.getElementById('target')!;
        expect(el.style.overflow).to.equal('auto');
        expect(el.style.color).to.equal('');
        expect(el.style.margin).to.equal('');
    });

    it('clears style when given an empty string', () => {
        const result = domActions.setStyle('#target', '');
        expect(result).to.be.true;
        expect(document.getElementById('target')!.style.cssText).to.equal('');
    });

    it('applies to all matching elements', () => {
        const result = domActions.setStyle('.styled', 'overflow: auto');
        expect(result).to.be.true;
        document.querySelectorAll('.styled').forEach((el) => {
            expect((el as HTMLElement).style.overflow).to.equal('auto');
        });
    });

    it('returns false when no elements match', () => {
        const result = domActions.setStyle('#nonexistent', 'color: blue');
        expect(result).to.be.false;
    });
});
