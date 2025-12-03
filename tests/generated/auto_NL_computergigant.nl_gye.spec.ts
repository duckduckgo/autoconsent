import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_computergigant.nl_gye', ['https://www.computergigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
