import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ettyhillesumcentrum.nl_kbb', ['https://ettyhillesumcentrum.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
