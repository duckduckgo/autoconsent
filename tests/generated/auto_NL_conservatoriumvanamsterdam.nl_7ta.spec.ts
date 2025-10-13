import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_conservatoriumvanamsterdam.nl_7ta', ['https://www.conservatoriumvanamsterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
