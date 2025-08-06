import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_evivanlanschot.nl_o0u', ['https://www.evivanlanschot.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
