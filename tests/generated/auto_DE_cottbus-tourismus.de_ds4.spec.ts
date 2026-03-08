import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cottbus-tourismus.de_ds4', ['https://cottbus-tourismus.de/de/sommer.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
