import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_startup-nights.ch_xet', ['https://www.startup-nights.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
