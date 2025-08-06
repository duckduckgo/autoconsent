import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zug-tourismus.ch_b9x', ['https://www.zug-tourismus.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
