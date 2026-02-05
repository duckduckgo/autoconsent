import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kostuempalast.de_bq4', ['https://www.kostuempalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
