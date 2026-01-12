import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landtag.brandenburg.de_5s7', ['https://www.landtag.brandenburg.de/de/startseite/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
