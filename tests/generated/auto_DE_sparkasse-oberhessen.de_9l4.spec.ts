import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-oberhessen.de_9l4', ['https://www.sparkasse-oberhessen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
