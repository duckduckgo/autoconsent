import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_musee-orsay.fr_vz0', ['https://www.musee-orsay.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
