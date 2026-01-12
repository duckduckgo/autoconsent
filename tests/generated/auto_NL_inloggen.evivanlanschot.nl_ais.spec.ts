import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_inloggen.evivanlanschot.nl_ais', ['https://inloggen.evivanlanschot.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
