import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berliner-ensemble.de_xy3', ['https://www.berliner-ensemble.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
