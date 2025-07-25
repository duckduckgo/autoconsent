import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-hildesheim.de_002', ['https://www.uni-hildesheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
