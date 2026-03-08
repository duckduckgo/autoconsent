import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formation.univ-lille.fr_ti9', ['https://formation.univ-lille.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
