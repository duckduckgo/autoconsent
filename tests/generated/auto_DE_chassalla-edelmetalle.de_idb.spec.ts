import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_chassalla-edelmetalle.de_idb', ['https://chassalla-edelmetalle.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
