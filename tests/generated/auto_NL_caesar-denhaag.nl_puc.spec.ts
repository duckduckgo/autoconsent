import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_caesar-denhaag.nl_puc', ['https://caesar-denhaag.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
