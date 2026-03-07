import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';

describe('addStyle', () => {
    const domActions = instantiateDomActions();

    afterEach(() => {
        document.getElementById('target')!.style.cssText = 'color: red; margin: 10px;';
        document.querySelectorAll('.add-styled').forEach((el) => {
            (el as HTMLElement).style.cssText = 'overflow: hidden;';
        });
    });

    it('appends CSS without removing existing styles', () => {
        const result = domActions.addStyle('#target', 'overflow: auto');
        expect(result).to.be.true;
        const el = document.getElementById('target')!;
        expect(el.style.overflow).to.equal('auto');
        expect(el.style.color).to.equal('red');
        expect(el.style.margin).to.equal('10px');
    });

    it('overrides a conflicting property via CSS last-wins', () => {
        const result = domActions.addStyle('#target', 'color: blue');
        expect(result).to.be.true;
        expect(document.getElementById('target')!.style.color).to.equal('blue');
    });

    it('applies to all matching elements', () => {
        const result = domActions.addStyle('.add-styled', 'overflow: auto');
        expect(result).to.be.true;
        document.querySelectorAll('.add-styled').forEach((el) => {
            expect((el as HTMLElement).style.overflow).to.equal('auto');
        });
    });

    it('returns false when no elements match', () => {
        const result = domActions.addStyle('#nonexistent', 'color: blue');
        expect(result).to.be.false;
    });
});
