import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-leipzig.de_awr', ['https://www.sparkasse-leipzig.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
