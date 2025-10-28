import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_museedesconfluences.fr_raj', ['https://museedesconfluences.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
