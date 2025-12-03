import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_musee-orangerie.fr_tc1', ['https://www.musee-orangerie.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
