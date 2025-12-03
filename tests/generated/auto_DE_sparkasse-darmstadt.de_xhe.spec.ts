import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-darmstadt.de_xhe', ['https://www.sparkasse-darmstadt.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
