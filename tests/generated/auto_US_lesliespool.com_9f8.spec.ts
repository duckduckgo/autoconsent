import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lesliespool.com_9f8', ['https://lesliespool.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
