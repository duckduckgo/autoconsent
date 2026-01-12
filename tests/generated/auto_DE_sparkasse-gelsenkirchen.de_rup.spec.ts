import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-gelsenkirchen.de_rup', ['https://www.sparkasse-gelsenkirchen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
