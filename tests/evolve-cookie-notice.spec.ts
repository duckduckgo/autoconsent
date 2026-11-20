import generateCMPTests from '../playwright/runner';

// EU visitors also get an Admiral TCF popup, which takes precedence over this cosmetic rule
generateCMPTests('evolve-cookie-notice', ['https://www.sherdog.com/', 'https://www.totalbeauty.com/'], {
    onlyRegions: ['US'],
});
