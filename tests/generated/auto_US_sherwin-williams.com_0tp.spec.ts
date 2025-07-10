import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sherwin-williams.com_0tp', ['https://www.sherwin-williams.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
