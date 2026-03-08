import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berliner-firmenlauf.de_ouw', ['https://berliner-firmenlauf.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
