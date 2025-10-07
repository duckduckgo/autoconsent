import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_library.universiteitleiden.nl_sd2', ['https://www.library.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
