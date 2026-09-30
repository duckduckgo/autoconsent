import { expect } from '@esm-bundle/chai';
import { addPixelEvents, buildSummaryPixels, emptyPixelState, getPixelEvents } from '../../addon/cpm-pixels';
import { ContentScriptMessage, ReportMessage } from '../../lib/messages';

function reportMessage(state: { heuristicPatterns?: string[]; heuristicSnippets?: string[]; detectedPopups?: string[] }): ReportMessage {
    return {
        type: 'report',
        instanceId: 'frame-1',
        url: 'https://example.com/',
        mainFrame: true,
        state: { heuristicPatterns: [], heuristicSnippets: [], detectedPopups: [], ...state },
    } as unknown as ReportMessage;
}

describe('getPixelEvents', () => {
    it('maps lifecycle messages to events', () => {
        expect(getPixelEvents({ type: 'popupFound', cmp: 'x', url: '' }, true)).to.deep.equal(['popup-found']);
        expect(getPixelEvents({ type: 'optOutResult', cmp: 'x', result: false, scheduleSelfTest: false, url: '' }, true)).to.deep.equal([
            'error_optout',
        ]);
        expect(getPixelEvents({ type: 'optOutResult', cmp: 'x', result: true, scheduleSelfTest: false, url: '' }, true)).to.deep.equal([]);
        expect(getPixelEvents({ type: 'optInResult', cmp: 'x', result: false, scheduleSelfTest: false, url: '' }, true)).to.deep.equal([]);
        expect(getPixelEvents({ type: 'autoconsentError', details: { msg: 'Found multiple CMPs' } }, true)).to.deep.equal([
            'error_multiple-popups',
        ]);
        expect(getPixelEvents({ type: 'init', url: '' }, true)).to.deep.equal([]);
    });

    it('splits done events by rule kind', () => {
        const done = (cmp: string, isCosmetic: boolean): ContentScriptMessage => ({
            type: 'autoconsentDone',
            cmp,
            isCosmetic,
            url: '',
            duration: 0,
            totalClicks: 0,
        });
        expect(getPixelEvents(done('onetrust', false), true)).to.deep.equal(['done']);
        expect(getPixelEvents(done('onetrust', true), true)).to.deep.equal(['done_cosmetic']);
        expect(getPixelEvents(done('HEURISTIC', false), true)).to.deep.equal(['done_heuristic']);
    });

    it('maps top-frame reports to detection events', () => {
        expect(getPixelEvents(reportMessage({ heuristicPatterns: ['cookies'] }), true)).to.deep.equal(['detected-by-patterns']);
        expect(getPixelEvents(reportMessage({ heuristicSnippets: ['cookies'], detectedPopups: ['onetrust'] }), true)).to.deep.equal([
            'detected-by-patterns',
            'detected-by-both',
        ]);
        expect(getPixelEvents(reportMessage({ detectedPopups: ['onetrust'] }), true)).to.deep.equal(['detected-only-rules']);
        expect(getPixelEvents(reportMessage({}), true)).to.deep.equal([]);
        expect(getPixelEvents(reportMessage({ heuristicPatterns: ['cookies'] }), false)).to.deep.equal([]);
    });
});

describe('addPixelEvents', () => {
    it('counts events for each bucket', () => {
        const state = emptyPixelState();
        addPixelEvents(state, 'top', ['init', 'popup-found']);
        addPixelEvents(state, 'top', ['init']);
        addPixelEvents(state, 'other', ['done']);
        expect(state.counts).to.deep.equal({ top: { init: 2, 'popup-found': 1 }, other: { done: 1 } });
    });

    it('counts a report event once for each frame', () => {
        const state = emptyPixelState();
        addPixelEvents(state, 'other', ['detected-by-patterns'], 'frame-1');
        addPixelEvents(state, 'other', ['detected-by-patterns', 'detected-by-both'], 'frame-1');
        addPixelEvents(state, 'other', ['detected-by-patterns'], 'frame-2');
        expect(state.counts.other).to.deep.equal({ 'detected-by-patterns': 2, 'detected-by-both': 1 });
    });
});

describe('buildSummaryPixels', () => {
    it('builds one pixel for each bucket with events', () => {
        const state = emptyPixelState();
        expect(buildSummaryPixels(state)).to.deep.equal([]);
        addPixelEvents(state, 'other', ['init']);
        expect(buildSummaryPixels(state)).to.deep.equal([{ name: 'autoconsent_summary', params: { siteRank: 'other', init: 1 } }]);
        addPixelEvents(state, 'top', ['init', 'done']);
        expect(buildSummaryPixels(state).map((pixel) => pixel.params.siteRank)).to.deep.equal(['top', 'other']);
    });

    it('sends only the bucket and event counts', () => {
        const state = emptyPixelState();
        addPixelEvents(state, 'top', ['init', 'popup-found', 'done'], 'frame-1');
        const [pixel] = buildSummaryPixels(state);
        const { siteRank, ...counts } = pixel.params;
        expect(siteRank).to.equal('top');
        Object.values(counts).forEach((count) => expect(count).to.be.a('number'));
    });
});
