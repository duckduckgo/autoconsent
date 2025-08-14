import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-bremen.de_2kp', ['https://www.sparkasse-bremen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
