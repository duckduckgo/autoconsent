import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_homecinesolutions.fr_hj8', ['https://www.homecinesolutions.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
