import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dorotheum.com_0g7', ['https://www.dorotheum.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
