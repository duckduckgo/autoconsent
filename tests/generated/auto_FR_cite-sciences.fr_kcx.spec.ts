import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cite-sciences.fr_kcx', ['https://www.cite-sciences.fr/fr/accueil'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
