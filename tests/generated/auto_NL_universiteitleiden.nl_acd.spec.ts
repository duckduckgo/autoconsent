import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_universiteitleiden.nl_acd', ['https://www.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
