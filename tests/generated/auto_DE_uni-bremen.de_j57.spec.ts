import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-bremen.de_j57', ['https://www.uni-bremen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
