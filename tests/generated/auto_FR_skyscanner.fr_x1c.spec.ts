import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_skyscanner.fr_x1c', ['https://www.skyscanner.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
