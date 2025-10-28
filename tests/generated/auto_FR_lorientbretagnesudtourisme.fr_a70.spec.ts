import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lorientbretagnesudtourisme.fr_a70', ['https://www.lorientbretagnesudtourisme.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
