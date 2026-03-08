import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_edeka-struve.de_t04', ['https://edeka-struve.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
