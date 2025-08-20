import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ligabank.de_bgt', ['https://www.ligabank.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
