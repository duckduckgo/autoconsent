import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksbankinostwestfalen.de_dod', ['https://www.volksbankinostwestfalen.de/startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
