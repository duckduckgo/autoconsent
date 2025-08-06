import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_floraspora.de_p56', ['https://www.floraspora.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
