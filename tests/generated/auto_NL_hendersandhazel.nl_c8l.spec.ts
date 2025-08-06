import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hendersandhazel.nl_c8l', ['https://www.hendersandhazel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
