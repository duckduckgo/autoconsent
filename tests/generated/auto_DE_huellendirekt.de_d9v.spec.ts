import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huellendirekt.de_d9v', ['https://www.huellendirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
