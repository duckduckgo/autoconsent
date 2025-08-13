import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kasseler-sparkasse.de_u2h', ['https://www.kasseler-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
