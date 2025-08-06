import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agence.maif.fr_5w3', ['https://agence.maif.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
