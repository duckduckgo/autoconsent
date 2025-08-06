import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoteiledirekt.de_4pq', ['https://www.autoteiledirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
