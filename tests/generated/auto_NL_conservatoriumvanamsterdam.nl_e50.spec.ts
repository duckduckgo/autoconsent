import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_conservatoriumvanamsterdam.nl_e50', ['https://www.conservatoriumvanamsterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
