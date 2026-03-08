import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_firmaelectronica.gob.es_s53', ['https://firmaelectronica.gob.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
