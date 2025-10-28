import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fietsersbond.nl_o5j', ['https://www.fietsersbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
