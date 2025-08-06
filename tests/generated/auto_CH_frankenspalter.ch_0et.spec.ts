import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frankenspalter.ch_0et', ['https://www.frankenspalter.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
