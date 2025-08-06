import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-kl.de_lk7', ['https://www.sparkasse-kl.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
