import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stmb.bayern.de_kdr', ['https://www.stmb.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
