import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-westmuensterland.de_qg1', ['https://www.sparkasse-westmuensterland.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
