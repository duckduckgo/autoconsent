import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bielefeld.jetzt_auy', ['https://www.bielefeld.jetzt/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
