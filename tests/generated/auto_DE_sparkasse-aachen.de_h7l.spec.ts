import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-aachen.de_h7l', ['https://www.sparkasse-aachen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
