import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-aachen.de_7lt', ['https://www.sparkasse-aachen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
