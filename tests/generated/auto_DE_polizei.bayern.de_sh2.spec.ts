import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_polizei.bayern.de_sh2', ['https://www.polizei.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
