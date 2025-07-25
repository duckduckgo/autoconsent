import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frankfurter-sparkasse.de_khe', ['https://www.frankfurter-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
