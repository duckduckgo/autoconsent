import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_est-ensemble.fr_wkg', ['https://www.est-ensemble.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
