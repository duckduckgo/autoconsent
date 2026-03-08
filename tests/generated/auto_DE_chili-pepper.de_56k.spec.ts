import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_chili-pepper.de_56k', ['https://chili-pepper.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
