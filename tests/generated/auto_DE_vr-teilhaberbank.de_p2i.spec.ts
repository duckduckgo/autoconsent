import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vr-teilhaberbank.de_p2i', ['https://www.vr-teilhaberbank.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
