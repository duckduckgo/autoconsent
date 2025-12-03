import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_library.universiteitleiden.nl_a0e', ['https://www.library.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
