import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ravensburger.de_7et', ['https://www.ravensburger.de/de-DE'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
