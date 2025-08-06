import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_moestuinland.nl_6vv', ['https://moestuinland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
