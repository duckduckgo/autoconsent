import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bafoeg-digital.de_99m', ['https://bafoeg-digital.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
