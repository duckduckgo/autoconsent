import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hendersandhazel.nl_cd3', ['https://www.hendersandhazel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
