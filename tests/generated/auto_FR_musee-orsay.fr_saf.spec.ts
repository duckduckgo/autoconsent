import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_musee-orsay.fr_saf', ['https://www.musee-orsay.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
