import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_allesovercrypto.nl_gib', ['https://allesovercrypto.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
