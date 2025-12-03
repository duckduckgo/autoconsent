import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rtvutrecht.nl_v8z', ['https://www.rtvutrecht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
