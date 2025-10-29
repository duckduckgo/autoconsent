import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_regiobank.nl_x7p', ['https://www.regiobank.nl/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
