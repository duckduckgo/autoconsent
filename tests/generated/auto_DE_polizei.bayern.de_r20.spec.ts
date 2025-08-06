import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_polizei.bayern.de_r20', ['https://www.polizei.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
