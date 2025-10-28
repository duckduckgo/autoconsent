import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_skyscanner.de_e32', ['https://www.skyscanner.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
