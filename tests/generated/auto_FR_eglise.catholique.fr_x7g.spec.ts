import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eglise.catholique.fr_x7g', ['https://eglise.catholique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
