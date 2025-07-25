import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_immobilien.sparkasse.de_0vw', ['https://immobilien.sparkasse.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
