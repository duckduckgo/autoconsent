import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-cotedazur.fr_cwn', ['https://univ-cotedazur.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
