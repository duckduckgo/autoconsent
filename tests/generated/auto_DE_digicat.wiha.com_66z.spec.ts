import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_digicat.wiha.com_66z', ['https://digicat.wiha.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
