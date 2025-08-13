import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_regiobank.nl_bm5', ['https://www.regiobank.nl/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
