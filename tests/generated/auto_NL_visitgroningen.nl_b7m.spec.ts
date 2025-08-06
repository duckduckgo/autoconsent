import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitgroningen.nl_b7m', ['https://www.visitgroningen.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
