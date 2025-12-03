import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_immobilien.sparkasse.de_zj7', ['https://immobilien.sparkasse.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
