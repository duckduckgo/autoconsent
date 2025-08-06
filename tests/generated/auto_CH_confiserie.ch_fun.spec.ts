import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_confiserie.ch_fun', ['https://www.confiserie.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
