import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-heilbronn.de_axc', ['https://www.sparkasse-heilbronn.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
