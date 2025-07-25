import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-bremen.de_a8g', ['https://www.sparkasse-bremen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
