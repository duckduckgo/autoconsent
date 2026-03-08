import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brunnen-verlag.de_ecv', ['https://brunnen-verlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
