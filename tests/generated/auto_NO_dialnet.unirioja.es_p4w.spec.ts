import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dialnet.unirioja.es_p4w', ['https://dialnet.unirioja.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
