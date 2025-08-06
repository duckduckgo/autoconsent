import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_marseille.aeroport.fr_7pj', ['https://www.marseille.aeroport.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
