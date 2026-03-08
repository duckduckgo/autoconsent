import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_filmkunstkinos.de_seq', ['https://filmkunstkinos.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
