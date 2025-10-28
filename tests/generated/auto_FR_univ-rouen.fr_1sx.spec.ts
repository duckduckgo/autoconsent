import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-rouen.fr_1sx', ['https://www.univ-rouen.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
