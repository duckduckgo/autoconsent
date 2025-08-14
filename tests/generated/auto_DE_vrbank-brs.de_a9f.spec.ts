import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrbank-brs.de_a9f', ['https://www.vrbank-brs.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
