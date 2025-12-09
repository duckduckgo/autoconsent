import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_valleiautogroep.nl_ao5', ['https://www.valleiautogroep.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
