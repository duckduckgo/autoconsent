import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_goldreporter.de_276', ['https://www.goldreporter.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
