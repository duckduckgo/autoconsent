import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-aubade.fr_2u0', ['https://www.espace-aubade.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
