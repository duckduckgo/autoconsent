import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blogs.glowscotland.org.uk_xr4', ['https://blogs.glowscotland.org.uk/glowblogs/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
