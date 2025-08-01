import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_polizei.bayern.de_jdv', ['https://www.polizei.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
