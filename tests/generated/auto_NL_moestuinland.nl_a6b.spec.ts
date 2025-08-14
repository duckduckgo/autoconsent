import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_moestuinland.nl_a6b', ['https://moestuinland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
