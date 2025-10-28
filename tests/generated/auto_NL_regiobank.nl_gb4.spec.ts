import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_regiobank.nl_gb4', ['https://www.regiobank.nl/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
