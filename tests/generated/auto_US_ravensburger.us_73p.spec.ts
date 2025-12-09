import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ravensburger.us_73p', ['https://www.ravensburger.us/en-US'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
