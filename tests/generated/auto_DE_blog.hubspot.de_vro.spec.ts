import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blog.hubspot.de_vro', ['https://blog.hubspot.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
