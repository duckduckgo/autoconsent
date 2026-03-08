import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formation.cyu.fr_zzw', ['https://formation.cyu.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
