import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_independentxpress.de_0qj', ['https://independentxpress.de/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
