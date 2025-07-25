import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_glueckzuhaus.de_mcc', ['https://glueckzuhaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
