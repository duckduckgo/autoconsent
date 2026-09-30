import { getDomain } from 'tldts-experimental';
import topSites from './top-sites.json';

// The privacy triage allows only a binary split: do not add buckets without a new triage.
export type SiteRankBucket = 'top' | 'other';

const topSiteDomains = new Set<string>(topSites);

// The lookup happens on the device, so the domain itself is never reported.
export function getSiteRankBucket(url: string): SiteRankBucket {
    const domain = getDomain(url);
    return domain && topSiteDomains.has(domain) ? 'top' : 'other';
}
