import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vr-teilhaberbank.de_ly2', ['https://www.vr-teilhaberbank.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
