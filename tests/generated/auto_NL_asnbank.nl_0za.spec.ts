import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_asnbank.nl_0za', ['https://www.asnbank.nl/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
