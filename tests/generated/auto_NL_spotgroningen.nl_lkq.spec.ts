import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spotgroningen.nl_lkq', ['https://www.spotgroningen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
