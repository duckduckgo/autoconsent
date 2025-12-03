import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_grunliberale.ch_urb', ['https://grunliberale.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
