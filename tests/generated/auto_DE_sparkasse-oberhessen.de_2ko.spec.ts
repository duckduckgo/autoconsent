import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-oberhessen.de_2ko', ['https://www.sparkasse-oberhessen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
