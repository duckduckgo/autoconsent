import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meinebank.de_czl', ['https://www.meinebank.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
