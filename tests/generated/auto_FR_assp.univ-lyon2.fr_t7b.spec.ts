import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assp.univ-lyon2.fr_t7b', ['https://assp.univ-lyon2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
