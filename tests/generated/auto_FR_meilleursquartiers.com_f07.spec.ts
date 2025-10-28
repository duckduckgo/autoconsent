import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meilleursquartiers.com_f07', ['https://meilleursquartiers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
