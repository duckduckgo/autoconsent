import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-lyon3.fr_gpk', ['https://www.univ-lyon3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
