import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-re.de_mbw', ['https://www.sparkasse-re.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
