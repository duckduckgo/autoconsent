import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hendersandhazel.nl_4uk', ['https://www.hendersandhazel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
