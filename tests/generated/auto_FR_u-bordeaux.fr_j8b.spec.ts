import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_u-bordeaux.fr_j8b', ['https://www.u-bordeaux.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
