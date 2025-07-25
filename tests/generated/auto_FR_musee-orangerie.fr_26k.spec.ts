import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_musee-orangerie.fr_26k', ['https://www.musee-orangerie.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
