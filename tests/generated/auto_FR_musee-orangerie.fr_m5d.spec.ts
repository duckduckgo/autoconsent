import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_musee-orangerie.fr_m5d', ['https://www.musee-orangerie.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
