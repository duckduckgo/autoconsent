import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_goldmarket.fr_3dw', ['https://www.goldmarket.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
