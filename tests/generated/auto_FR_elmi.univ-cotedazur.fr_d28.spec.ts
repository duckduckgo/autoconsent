import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elmi.univ-cotedazur.fr_d28', ['https://elmi.univ-cotedazur.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
