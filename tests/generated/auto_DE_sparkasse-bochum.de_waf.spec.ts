import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-bochum.de_waf', ['https://www.sparkasse-bochum.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
