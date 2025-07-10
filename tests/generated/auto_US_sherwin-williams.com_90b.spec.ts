import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sherwin-williams.com_90b', ['https://www.sherwin-williams.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
