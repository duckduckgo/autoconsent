import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_marseille.aeroport.fr_8ul', ['https://www.marseille.aeroport.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
