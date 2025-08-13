import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stmb.bayern.de_h77', ['https://www.stmb.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
