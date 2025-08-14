import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bafoeg-digital.de_99m', ['https://www.bafoeg-digital.de/ams/BAFOEG'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
