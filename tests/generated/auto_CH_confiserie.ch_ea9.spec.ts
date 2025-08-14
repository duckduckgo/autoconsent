import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_confiserie.ch_ea9', ['https://www.confiserie.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
