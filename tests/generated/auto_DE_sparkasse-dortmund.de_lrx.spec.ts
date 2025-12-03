import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-dortmund.de_lrx', ['https://www.sparkasse-dortmund.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
