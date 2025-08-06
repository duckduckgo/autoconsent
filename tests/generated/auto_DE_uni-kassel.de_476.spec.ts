import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-kassel.de_476', ['https://www.uni-kassel.de/uni/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
