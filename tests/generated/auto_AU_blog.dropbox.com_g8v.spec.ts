import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_blog.dropbox.com_g8v', ['https://blog.dropbox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
