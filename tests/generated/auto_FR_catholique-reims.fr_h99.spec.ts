import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_catholique-reims.fr_h99', ['https://catholique-reims.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
