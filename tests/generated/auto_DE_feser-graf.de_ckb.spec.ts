import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_feser-graf.de_ckb', ['https://www.feser-graf.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
