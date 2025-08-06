import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bafoeg-digital.de_bhy', ['https://www.bafoeg-digital.de/ams/BAFOEG'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
