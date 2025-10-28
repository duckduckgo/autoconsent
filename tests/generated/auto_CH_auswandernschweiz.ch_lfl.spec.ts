import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auswandernschweiz.ch_lfl', ['https://www.auswandernschweiz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
