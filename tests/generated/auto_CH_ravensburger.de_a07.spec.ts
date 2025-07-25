import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ravensburger.de_a07', ['https://www.ravensburger.de/de-DE'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
