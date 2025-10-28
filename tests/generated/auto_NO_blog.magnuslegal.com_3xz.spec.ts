import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_blog.magnuslegal.com_3xz', ['https://blog.magnuslegal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
