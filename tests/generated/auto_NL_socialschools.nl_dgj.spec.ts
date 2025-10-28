import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_socialschools.nl_dgj', ['https://www.socialschools.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
