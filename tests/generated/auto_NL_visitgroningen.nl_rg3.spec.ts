import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitgroningen.nl_rg3', ['https://www.visitgroningen.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
