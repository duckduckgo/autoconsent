import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-koelnbonn.de_plt', ['https://www.sparkasse-koelnbonn.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
