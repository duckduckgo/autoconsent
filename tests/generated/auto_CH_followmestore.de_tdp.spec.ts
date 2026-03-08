import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_followmestore.de_tdp', ['https://followmestore.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
