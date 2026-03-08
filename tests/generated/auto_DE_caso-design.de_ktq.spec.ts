import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_caso-design.de_ktq', ['https://caso-design.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
