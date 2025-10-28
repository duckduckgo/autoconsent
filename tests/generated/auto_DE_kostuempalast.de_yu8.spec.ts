import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kostuempalast.de_yu8', ['https://www.kostuempalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
