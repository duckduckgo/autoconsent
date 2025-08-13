import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hendrickdekeyser.nl_i9j', ['https://www.hendrickdekeyser.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
