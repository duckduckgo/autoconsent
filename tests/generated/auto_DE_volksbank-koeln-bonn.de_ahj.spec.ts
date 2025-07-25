import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksbank-koeln-bonn.de_ahj', ['https://www.volksbank-koeln-bonn.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
