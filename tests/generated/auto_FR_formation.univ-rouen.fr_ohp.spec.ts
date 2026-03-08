import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_formation.univ-rouen.fr_ohp', ['https://formation.univ-rouen.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
