import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_svb-marine.fr_4d8', ['https://www.svb-marine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
