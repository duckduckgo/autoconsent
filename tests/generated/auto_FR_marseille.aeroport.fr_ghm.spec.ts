import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_marseille.aeroport.fr_ghm', ['https://www.marseille.aeroport.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
