import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mindfactory.de_me9', ['https://www.mindfactory.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
