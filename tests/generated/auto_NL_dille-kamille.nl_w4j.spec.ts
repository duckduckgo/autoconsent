import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dille-kamille.nl_w4j', ['https://www.dille-kamille.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
