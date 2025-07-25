import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_confiserie.ch_tpi', ['https://www.confiserie.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
