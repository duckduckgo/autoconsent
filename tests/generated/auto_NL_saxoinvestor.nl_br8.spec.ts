import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_saxoinvestor.nl_br8', ['https://www.saxoinvestor.nl/login?ReturnUrl=%2finvestor'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
