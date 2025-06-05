import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_help.dropbox.com_0', ['https://help.dropbox.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
