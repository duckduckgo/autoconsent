import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_haw-landshut.de_bhh', ['https://www.haw-landshut.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
