import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-pdh.de_baf', ['https://www.sparkasse-pdh.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
