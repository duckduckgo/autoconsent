import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-freiburg.de_y5z', ['https://www.sparkasse-freiburg.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
