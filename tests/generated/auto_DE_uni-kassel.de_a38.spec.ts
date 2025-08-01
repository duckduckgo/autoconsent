import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-kassel.de_a38', ['https://www.uni-kassel.de/uni/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
