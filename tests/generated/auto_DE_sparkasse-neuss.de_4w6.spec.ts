import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-neuss.de_4w6', ['https://www.sparkasse-neuss.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
