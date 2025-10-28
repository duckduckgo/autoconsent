import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-paris8.fr_iz8', ['https://www.univ-paris8.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
