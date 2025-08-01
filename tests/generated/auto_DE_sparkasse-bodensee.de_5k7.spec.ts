import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-bodensee.de_5k7', ['https://www.sparkasse-bodensee.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
