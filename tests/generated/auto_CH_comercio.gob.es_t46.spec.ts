import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_comercio.gob.es_t46', ['https://comercio.gob.es/en-us/Paginas/Index.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
