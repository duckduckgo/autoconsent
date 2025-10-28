import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_blog.kinkly.com_ra9', ['https://blog.kinkly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
