import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-allgaeu.de_k2l', ['https://www.sparkasse-allgaeu.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
