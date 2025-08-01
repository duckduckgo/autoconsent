import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-neuss.de_1xn', ['https://www.sparkasse-neuss.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
