import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-bremen.de_iwz', ['https://www.uni-bremen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
