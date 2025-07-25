import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_123groepenkast.nl_r64', ['https://123groepenkast.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
