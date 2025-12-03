import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-holstein.de_0nk', ['https://www.sparkasse-holstein.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
