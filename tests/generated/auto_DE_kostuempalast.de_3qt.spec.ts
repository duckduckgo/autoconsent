import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kostuempalast.de_3qt', ['https://www.kostuempalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
