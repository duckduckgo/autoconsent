import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_enseignementsup-recherche.gouv.fr_lpf', ['https://www.enseignementsup-recherche.gouv.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
