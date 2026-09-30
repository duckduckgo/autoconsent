import { ContentScriptMessage } from '../lib/messages';
import { getSiteRankBucket, SiteRankBucket } from './site-rank';

// Local model of the CPM summary pixel, split by site rank bucket. The test extension only logs pixels.

export const SUMMARY_ALARM_NAME = 'cpm-summary';
const SUMMARY_DELAY_MINUTES = 2;
export const PIXEL_STATE_KEY = 'cpmPixelState';
export const FIRED_PIXELS_KEY = 'cpmPixelsFired';
const MAX_FIRED_PIXELS = 20;
const SITE_RANK_BUCKETS: SiteRankBucket[] = ['top', 'other'];

export type CpmPixelEvent =
    | 'init'
    | 'popup-found'
    | 'error_optout'
    | 'done'
    | 'done_cosmetic'
    | 'done_heuristic'
    | 'detected-by-patterns'
    | 'detected-by-both'
    | 'detected-only-rules'
    | 'error_multiple-popups';

export type CpmPixelState = {
    counts: Partial<Record<SiteRankBucket, Partial<Record<CpmPixelEvent, number>>>>;
    // `${event}:${instanceId}` keys, so that each frame reports a detection event once per summary
    seenReports: string[];
};

// Only the bucket and event counts: no URL, domain, or rule name.
export type CpmSummaryPixel = {
    name: 'autoconsent_summary';
    params: { siteRank: SiteRankBucket } & Partial<Record<CpmPixelEvent, number>>;
};

export type FiredCpmPixel = CpmSummaryPixel & { time: number };

export function emptyPixelState(): CpmPixelState {
    return { counts: {}, seenReports: [] };
}

// Events from the CPM pixel spec. The caller adds 'init', because it depends on the site exception list.
export function getPixelEvents(msg: ContentScriptMessage, mainFrame: boolean): CpmPixelEvent[] {
    switch (msg.type) {
        case 'popupFound':
            return ['popup-found'];
        case 'optOutResult':
            return msg.result ? [] : ['error_optout'];
        case 'autoconsentDone':
            if (msg.cmp.startsWith('HEURISTIC')) {
                return ['done_heuristic'];
            }
            return [msg.isCosmetic ? 'done_cosmetic' : 'done'];
        case 'autoconsentError':
            return msg.details?.msg?.includes('Found multiple CMPs') ? ['error_multiple-popups'] : [];
        case 'report': {
            if (!mainFrame) {
                return [];
            }
            const heuristicMatch = msg.state.heuristicPatterns.length > 0 || msg.state.heuristicSnippets.length > 0;
            const events: CpmPixelEvent[] = heuristicMatch ? ['detected-by-patterns'] : [];
            if (msg.state.detectedPopups.length > 0) {
                events.push(heuristicMatch ? 'detected-by-both' : 'detected-only-rules');
            }
            return events;
        }
        default:
            return [];
    }
}

// With `instanceId`, each event is counted once per frame.
export function addPixelEvents(state: CpmPixelState, bucket: SiteRankBucket, events: CpmPixelEvent[], instanceId?: string) {
    const bucketCounts = (state.counts[bucket] ??= {});
    for (const event of events) {
        if (instanceId) {
            const reportKey = `${event}:${instanceId}`;
            if (state.seenReports.includes(reportKey)) {
                continue;
            }
            state.seenReports.push(reportKey);
        }
        bucketCounts[event] = (bucketCounts[event] || 0) + 1;
    }
}

// One summary pixel for each bucket that has events.
export function buildSummaryPixels(state: CpmPixelState): CpmSummaryPixel[] {
    return SITE_RANK_BUCKETS.filter((bucket) => Object.keys(state.counts[bucket] || {}).length > 0).map((bucket) => ({
        name: 'autoconsent_summary',
        params: { siteRank: bucket, ...state.counts[bucket] },
    }));
}

// Serialize state updates, because messages from many frames arrive at the same time.
let stateQueue: Promise<void> = Promise.resolve();

function modifyPixelState(update: (state: CpmPixelState) => void): Promise<void> {
    const next = stateQueue.then(async () => {
        const state = ((await chrome.storage.session.get(PIXEL_STATE_KEY))[PIXEL_STATE_KEY] as CpmPixelState) || emptyPixelState();
        update(state);
        await chrome.storage.session.set({ [PIXEL_STATE_KEY]: state });
    });
    stateQueue = next.catch((e) => console.error('CPM pixel state update failed', e));
    return next;
}

// The summary fires 2 minutes after the first event, as in the production extension.
export async function firePixelEvents(siteUrl: string, events: CpmPixelEvent[], instanceId?: string) {
    if (events.length === 0) {
        return;
    }
    const bucket = getSiteRankBucket(siteUrl);
    await modifyPixelState((state) => addPixelEvents(state, bucket, events, instanceId));
    if (!(await chrome.alarms.get(SUMMARY_ALARM_NAME))) {
        await chrome.alarms.create(SUMMARY_ALARM_NAME, { delayInMinutes: SUMMARY_DELAY_MINUTES });
    }
}

export async function fireSummaryPixels() {
    let pixels: CpmSummaryPixel[] = [];
    await modifyPixelState((state) => {
        pixels = buildSummaryPixels(state);
        Object.assign(state, emptyPixelState());
    });
    if (pixels.length === 0) {
        return;
    }
    pixels.forEach((pixel) => console.log('CPM pixel (not sent)', pixel.name, pixel.params));
    const firedPixels = ((await chrome.storage.session.get(FIRED_PIXELS_KEY))[FIRED_PIXELS_KEY] as FiredCpmPixel[]) || [];
    const time = Date.now();
    firedPixels.push(...pixels.map((pixel) => ({ ...pixel, time })));
    await chrome.storage.session.set({ [FIRED_PIXELS_KEY]: firedPixels.slice(-MAX_FIRED_PIXELS) });
}
