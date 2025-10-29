import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_snsbank.nl_uu2', ['https://www.snsbank.nl/particulier/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
