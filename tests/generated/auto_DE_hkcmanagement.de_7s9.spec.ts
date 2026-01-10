import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hkcmanagement.de_7s9', ['https://hkcmanagement.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
