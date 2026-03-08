import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_edusupport.rug.nl_dgc', ['https://edusupport.rug.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
