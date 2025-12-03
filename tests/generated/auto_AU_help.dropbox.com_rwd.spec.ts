import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_help.dropbox.com_rwd', ['https://www.dropbox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
