import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_grunliberale.ch_apf', ['https://grunliberale.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
