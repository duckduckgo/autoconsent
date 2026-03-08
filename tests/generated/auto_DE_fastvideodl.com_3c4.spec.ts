import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fastvideodl.com_3c4', ['https://fastvideodl.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
