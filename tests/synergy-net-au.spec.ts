import generateCMPTests from '../playwright/runner';

// the site returns 403 to many non-AU IPs (e.g. US, NL, PL, JP)
generateCMPTests('synergy-net-au', ['https://www.synergy.net.au/'], {
    onlyRegions: ['AU', 'GB', 'DE', 'FR', 'CA'],
});
