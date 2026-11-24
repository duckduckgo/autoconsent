import generateCMPTests from '../playwright/runner';

// The site accepts all cookies itself and shows no banner in these regions.
generateCMPTests('ss.com', ['https://m.ss.com/', 'https://www.ss.com/en/', 'https://www.ss.lv/'], {
    skipRegions: ['AU', 'CA', 'CH', 'NO'],
});
