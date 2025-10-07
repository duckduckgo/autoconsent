import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_arkansasrazorbacks.com_q79', ['https://arkansasrazorbacks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
