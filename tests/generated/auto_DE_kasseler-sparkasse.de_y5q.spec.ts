import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kasseler-sparkasse.de_y5q', ['https://www.kasseler-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
