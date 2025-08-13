import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives18.fr_g98', ['https://www.archives18.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
