import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_atrium-sud.fr_wki', ['https://www.atrium-sud.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
