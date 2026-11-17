import generateCMPTests from '../playwright/runner';

// the full site is only served in Georgia; elsewhere a restricted-region page shows the same banner
generateCMPTests('crystalbet', ['https://m.crystalbet.com/'], {
    onlyRegions: ['GE', 'US', 'DE'],
});
generateCMPTests('crystalbet', ['https://www.crystalbet.com/'], {
    onlyRegions: ['GE'],
});
generateCMPTests('crystalbet', ['https://m.crystalbet.com/'], {
    onlyRegions: ['GE'],
    mobile: true,
});
