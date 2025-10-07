import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_independentxpress.de_rj8', ['https://independentxpress.de/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
