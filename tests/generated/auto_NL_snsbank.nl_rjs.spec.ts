import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_snsbank.nl_rjs', ['https://www.snsbank.nl/particulier/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
