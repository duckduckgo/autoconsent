import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dachtraegeronline.de_dbz', ['https://dachtraegeronline.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
