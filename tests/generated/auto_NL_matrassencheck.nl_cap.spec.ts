import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_matrassencheck.nl_cap', ['https://www.matrassencheck.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
