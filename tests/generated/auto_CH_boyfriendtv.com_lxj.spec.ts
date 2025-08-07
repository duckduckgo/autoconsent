import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boyfriendtv.com_lxj', ['https://www.boyfriendtv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
