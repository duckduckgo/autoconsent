import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_arkansasrazorbacks.com_ave', ['https://arkansasrazorbacks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
