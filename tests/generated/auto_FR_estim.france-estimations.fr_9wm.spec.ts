import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_estim.france-estimations.fr_9wm', ['https://estim.france-estimations.fr/u/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
