import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-essen.de_pph', ['https://www.sparkasse-essen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
