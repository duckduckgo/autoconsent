import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meesterslijpers.nl_pr3', ['https://www.meesterslijpers.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
