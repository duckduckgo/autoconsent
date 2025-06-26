import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_skysports.com_akj', ['https://www.skysports.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
