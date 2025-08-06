import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-trier.de_3v7', ['https://www.sparkasse-trier.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
