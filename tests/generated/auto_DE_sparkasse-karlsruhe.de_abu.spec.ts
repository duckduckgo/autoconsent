import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparkasse-karlsruhe.de_abu', ['https://www.sparkasse-karlsruhe.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
