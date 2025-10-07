import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-darmstadt.de_1xm', ['https://www.sparkasse-darmstadt.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
