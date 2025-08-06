import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diebank.de_ti2', ['https://www.diebank.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
