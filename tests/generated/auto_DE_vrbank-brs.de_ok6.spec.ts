import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrbank-brs.de_ok6', ['https://www.vrbank-brs.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
