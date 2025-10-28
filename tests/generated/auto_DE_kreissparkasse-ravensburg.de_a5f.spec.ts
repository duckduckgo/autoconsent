import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kreissparkasse-ravensburg.de_a5f', ['https://www.kreissparkasse-ravensburg.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
