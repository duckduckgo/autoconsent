import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_immobilien.sparkasse.de_7cm', ['https://immobilien.sparkasse.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
