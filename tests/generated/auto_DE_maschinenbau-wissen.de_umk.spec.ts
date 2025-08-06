import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maschinenbau-wissen.de_umk', ['https://www.maschinenbau-wissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
