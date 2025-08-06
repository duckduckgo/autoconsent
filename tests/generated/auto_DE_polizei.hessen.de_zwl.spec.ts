import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_polizei.hessen.de_zwl', ['https://www.polizei.hessen.de/Startseite/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
