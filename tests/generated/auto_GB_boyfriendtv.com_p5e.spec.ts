import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boyfriendtv.com_p5e', ['https://www.boyfriendtv.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
