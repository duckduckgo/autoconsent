import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-lyon1.fr_obk', ['https://www.univ-lyon1.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
