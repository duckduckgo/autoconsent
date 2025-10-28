import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_computable.nl_71w', ['https://www.computable.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
