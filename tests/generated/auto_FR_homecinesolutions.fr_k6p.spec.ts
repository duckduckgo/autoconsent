import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_homecinesolutions.fr_k6p', ['https://www.homecinesolutions.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
