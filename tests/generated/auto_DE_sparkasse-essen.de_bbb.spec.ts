import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-essen.de_bbb', ['https://www.sparkasse-essen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
