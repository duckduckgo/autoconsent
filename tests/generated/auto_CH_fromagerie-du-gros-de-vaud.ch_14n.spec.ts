import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fromagerie-du-gros-de-vaud.ch_14n', ['https://fromagerie-du-gros-de-vaud.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
