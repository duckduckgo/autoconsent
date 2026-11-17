import generateCMPTests from '../playwright/runner';

// the site is only reachable from Georgia
generateCMPTests('crystalbet', ['https://m.crystalbet.com/', 'https://www.crystalbet.com/'], {
    onlyRegions: ['GE'],
});
generateCMPTests('crystalbet', ['https://m.crystalbet.com/'], {
    onlyRegions: ['GE'],
    mobile: true,
});
