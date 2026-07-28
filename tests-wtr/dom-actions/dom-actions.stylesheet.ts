import { expect } from '@esm-bundle/chai';
import { instantiateDomActions } from './utils';

describe('stylesheet', () => {
    const domActions = instantiateDomActions();

    afterEach(() => {
        document.getElementById('autoconsent-css-rules')?.remove();
    });

    it('appends a stylesheet rule', () => {
        const result = domActions.stylesheet('.locked body { position: static !important; }', 'test-scroll-unlock');
        expect(result).to.be.true;
        const styleEl = document.getElementById('autoconsent-css-rules');
        expect(styleEl?.textContent).to.include('position: static !important');
        expect(styleEl?.textContent).to.include('/* autoconsent:test-scroll-unlock */');
    });

    it('does not duplicate rules with the same stylesheetId', () => {
        domActions.stylesheet('.locked body { position: static !important; }', 'test-scroll-unlock');
        const result = domActions.stylesheet('.locked body { position: static !important; }', 'test-scroll-unlock');
        expect(result).to.be.true;
        const styleEl = document.getElementById('autoconsent-css-rules');
        expect(styleEl?.textContent?.match(/test-scroll-unlock/g)?.length).to.equal(1);
    });
});
