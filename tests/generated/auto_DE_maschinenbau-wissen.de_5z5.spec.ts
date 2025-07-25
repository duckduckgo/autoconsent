import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maschinenbau-wissen.de_5z5', ['https://www.maschinenbau-wissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
