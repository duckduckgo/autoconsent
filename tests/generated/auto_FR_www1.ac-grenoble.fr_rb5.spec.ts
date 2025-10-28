import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_www1.ac-grenoble.fr_rb5', ['https://www1.ac-grenoble.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
