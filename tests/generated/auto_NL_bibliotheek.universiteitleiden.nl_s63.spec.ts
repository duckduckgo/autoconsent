import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bibliotheek.universiteitleiden.nl_s63', ['https://www.bibliotheek.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
