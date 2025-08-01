import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitgroningen.nl_8n2', ['https://www.visitgroningen.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
