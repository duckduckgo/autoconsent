import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-lyon2.fr_th3', ['https://www.univ-lyon2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
