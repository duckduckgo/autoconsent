import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-oberhessen.de_o6k', ['https://www.sparkasse-oberhessen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
