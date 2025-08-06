import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uni-hildesheim.de_h4n', ['https://www.uni-hildesheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
