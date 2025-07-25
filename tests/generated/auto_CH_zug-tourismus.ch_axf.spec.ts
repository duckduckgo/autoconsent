import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zug-tourismus.ch_axf', ['https://www.zug-tourismus.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
