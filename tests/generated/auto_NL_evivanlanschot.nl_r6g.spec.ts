import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_evivanlanschot.nl_r6g', ['https://www.evivanlanschot.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
