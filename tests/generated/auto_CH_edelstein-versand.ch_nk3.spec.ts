import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_edelstein-versand.ch_nk3', ['https://edelstein-versand.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
