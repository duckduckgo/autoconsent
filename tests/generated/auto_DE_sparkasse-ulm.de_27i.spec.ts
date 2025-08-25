import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-ulm.de_27i', ['https://www.sparkasse-ulm.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
