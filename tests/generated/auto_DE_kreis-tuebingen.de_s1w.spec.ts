import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kreis-tuebingen.de_s1w', ['https://www.kreis-tuebingen.de/Startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
