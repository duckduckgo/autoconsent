import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_library.universiteitleiden.nl_kxt', ['https://www.library.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
