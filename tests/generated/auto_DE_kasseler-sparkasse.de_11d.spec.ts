import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kasseler-sparkasse.de_11d', ['https://www.kasseler-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
