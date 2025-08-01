import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dorotheum.com_pcr', ['https://www.dorotheum.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
