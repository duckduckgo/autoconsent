import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dekra.de_yxx', ['https://www.dekra.de/de/startseite/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
