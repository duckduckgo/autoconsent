import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-regensburg.de_k5q', ['https://www.sparkasse-regensburg.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
