import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sparda-h.de_2al', ['https://www.sparda-h.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
