import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-freiburg.de_djm', ['https://www.sparkasse-freiburg.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
