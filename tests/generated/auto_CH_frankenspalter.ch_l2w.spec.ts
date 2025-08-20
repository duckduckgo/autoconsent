import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frankenspalter.ch_l2w', ['https://www.frankenspalter.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
