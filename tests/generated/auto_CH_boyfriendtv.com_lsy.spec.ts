import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boyfriendtv.com_lsy', ['https://www.boyfriendtv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
