import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mall-center.shopping_fxi', ['https://mall-center.shopping/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
