import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agences.dpd.fr_e97', ['https://agences.dpd.fr/fr/recherche-agence'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
