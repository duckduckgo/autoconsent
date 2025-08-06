import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huellendirekt.de_538', ['https://www.huellendirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
