import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_parchment.com_zcf', ['https://www.parchment.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
