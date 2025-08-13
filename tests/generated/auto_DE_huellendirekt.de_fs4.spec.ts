import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huellendirekt.de_fs4', ['https://www.huellendirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
