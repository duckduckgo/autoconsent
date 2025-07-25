import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rtvutrecht.nl_g8a', ['https://www.rtvutrecht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
