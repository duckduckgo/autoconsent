import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boyfriendtv.com_i8o', ['https://www.boyfriendtv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
