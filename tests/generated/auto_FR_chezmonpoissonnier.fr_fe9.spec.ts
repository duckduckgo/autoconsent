import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chezmonpoissonnier.fr_fe9', ['https://chezmonpoissonnier.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
