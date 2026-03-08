import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_en.salvia-nutrition.com_vnr', ['https://en.salvia-nutrition.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
