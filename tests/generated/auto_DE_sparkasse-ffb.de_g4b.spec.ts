import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-ffb.de_g4b', ['https://www.sparkasse-ffb.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
