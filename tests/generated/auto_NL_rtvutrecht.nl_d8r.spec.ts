import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rtvutrecht.nl_d8r', ['https://www.rtvutrecht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
