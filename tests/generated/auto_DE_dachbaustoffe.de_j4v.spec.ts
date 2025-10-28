import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dachbaustoffe.de_j4v', ['https://www.dachbaustoffe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
