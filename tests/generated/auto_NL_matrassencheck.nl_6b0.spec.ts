import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_matrassencheck.nl_6b0', ['https://www.matrassencheck.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
