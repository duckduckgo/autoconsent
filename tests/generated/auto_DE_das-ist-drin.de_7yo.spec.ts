import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_das-ist-drin.de_7yo', ['https://das-ist-drin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
