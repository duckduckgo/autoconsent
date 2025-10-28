import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsche-depressionshilfe.de_gmc', ['https://www.deutsche-depressionshilfe.de/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
