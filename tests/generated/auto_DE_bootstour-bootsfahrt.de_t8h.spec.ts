import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bootstour-bootsfahrt.de_t8h', ['https://bootstour-bootsfahrt.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
