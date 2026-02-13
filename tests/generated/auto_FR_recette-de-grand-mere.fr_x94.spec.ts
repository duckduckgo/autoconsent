import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_recette-de-grand-mere.fr_x94', ['https://recette-de-grand-mere.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
