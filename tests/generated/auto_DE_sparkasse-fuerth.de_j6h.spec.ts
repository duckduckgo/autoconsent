import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-fuerth.de_j6h', ['https://www.sparkasse-fuerth.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
