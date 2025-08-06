import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-saarbruecken.de_iyf', ['https://www.sparkasse-saarbruecken.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
