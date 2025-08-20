import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frankenspalter.ch_jo0', ['https://www.frankenspalter.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
