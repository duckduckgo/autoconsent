import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tout-electromenager.fr_t63', ['https://tout-electromenager.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
