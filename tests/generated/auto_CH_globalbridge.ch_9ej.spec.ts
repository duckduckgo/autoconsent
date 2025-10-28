import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_globalbridge.ch_9ej', ['https://globalbridge.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
