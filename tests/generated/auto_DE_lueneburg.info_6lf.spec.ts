import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lueneburg.info_6lf', ['https://www.lueneburg.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
