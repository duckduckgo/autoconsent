import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoteiledirekt.de_c3e', ['https://www.autoteiledirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
