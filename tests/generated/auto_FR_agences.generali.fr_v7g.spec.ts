import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agences.generali.fr_v7g', ['https://agences.generali.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
