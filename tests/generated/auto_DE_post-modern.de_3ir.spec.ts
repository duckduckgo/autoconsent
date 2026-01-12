import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_post-modern.de_3ir', ['https://www.post-modern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
