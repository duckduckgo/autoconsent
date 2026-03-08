import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blog.deutsches-museum.de_h7p', ['https://blog.deutsches-museum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
