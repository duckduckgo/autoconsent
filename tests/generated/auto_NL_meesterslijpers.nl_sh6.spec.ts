import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meesterslijpers.nl_sh6', ['https://www.meesterslijpers.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
