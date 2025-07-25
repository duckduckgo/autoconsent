import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_caixabank.es_6ak', ['https://www.caixabank.es/particular/home/particulares_es.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
