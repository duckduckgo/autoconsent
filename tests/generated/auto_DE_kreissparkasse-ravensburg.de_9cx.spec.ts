import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kreissparkasse-ravensburg.de_9cx', ['https://www.kreissparkasse-ravensburg.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
