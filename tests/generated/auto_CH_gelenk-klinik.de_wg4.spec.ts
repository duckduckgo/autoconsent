import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gelenk-klinik.de_wg4', ['https://gelenk-klinik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
