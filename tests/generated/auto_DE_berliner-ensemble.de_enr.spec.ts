import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berliner-ensemble.de_enr', ['https://www.berliner-ensemble.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
