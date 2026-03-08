import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auto-streuli.ch_l0w', ['https://auto-streuli.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
