import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_support.atag.nl_xnz', ['https://support.atag.nl/support/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
