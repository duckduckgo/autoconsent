import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boyfriendtv.com_til', ['https://www.boyfriendtv.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
