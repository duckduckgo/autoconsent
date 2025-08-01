import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mindfactory.de_sqr', ['https://www.mindfactory.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
