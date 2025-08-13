import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_medewerkers.universiteitleiden.nl_xm5', ['https://www.medewerkers.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
