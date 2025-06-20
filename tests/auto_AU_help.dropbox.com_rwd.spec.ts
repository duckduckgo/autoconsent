import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_help.dropbox.com_rwd', ['https://help.dropbox.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
