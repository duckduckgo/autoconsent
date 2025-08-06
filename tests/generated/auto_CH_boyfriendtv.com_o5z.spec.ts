import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boyfriendtv.com_o5z', ['https://www.boyfriendtv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
