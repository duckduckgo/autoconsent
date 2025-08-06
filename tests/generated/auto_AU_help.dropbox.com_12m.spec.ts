import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_help.dropbox.com_12m', ['https://help.dropbox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
