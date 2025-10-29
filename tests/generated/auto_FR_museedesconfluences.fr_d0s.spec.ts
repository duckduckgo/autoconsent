import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_museedesconfluences.fr_d0s', ['https://museedesconfluences.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
