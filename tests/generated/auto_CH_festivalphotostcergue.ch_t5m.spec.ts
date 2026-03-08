import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_festivalphotostcergue.ch_t5m', ['https://festivalphotostcergue.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
