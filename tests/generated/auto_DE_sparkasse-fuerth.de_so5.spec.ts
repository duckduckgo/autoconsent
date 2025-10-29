import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-fuerth.de_so5', ['https://www.sparkasse-fuerth.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
