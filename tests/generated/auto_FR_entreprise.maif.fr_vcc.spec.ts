import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreprise.maif.fr_vcc', ['https://entreprise.maif.fr/accueil'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
