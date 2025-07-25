import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksbank-pur.de_dtk', ['https://www.volksbank-pur.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
