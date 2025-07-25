import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dekra.de_3by', ['https://www.dekra.de/de/startseite/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
