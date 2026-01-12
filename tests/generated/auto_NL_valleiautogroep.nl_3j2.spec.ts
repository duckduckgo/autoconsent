import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_valleiautogroep.nl_3j2', ['https://www.valleiautogroep.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
