import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berliner-ensemble.de_z5f', ['https://www.berliner-ensemble.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
