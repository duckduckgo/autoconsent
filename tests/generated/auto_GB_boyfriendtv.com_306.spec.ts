import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boyfriendtv.com_306', ['https://www.boyfriendtv.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
