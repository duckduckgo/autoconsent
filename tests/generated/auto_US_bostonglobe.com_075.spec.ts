import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bostonglobe.com_075', ['https://www.bostonglobe.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
