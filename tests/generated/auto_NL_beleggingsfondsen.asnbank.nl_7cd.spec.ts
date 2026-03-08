import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_beleggingsfondsen.asnbank.nl_7cd', ['https://beleggingsfondsen.asnbank.nl/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
