import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-hannover.de_oql', ['https://www.sparkasse-hannover.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
