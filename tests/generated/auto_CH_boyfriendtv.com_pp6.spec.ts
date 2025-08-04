import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boyfriendtv.com_pp6', ['https://www.boyfriendtv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
