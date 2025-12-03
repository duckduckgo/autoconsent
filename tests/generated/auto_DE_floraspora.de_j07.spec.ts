import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_floraspora.de_j07', ['https://www.floraspora.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
