import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schauspielfrankfurt.de_t8y', ['https://www.schauspielfrankfurt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
