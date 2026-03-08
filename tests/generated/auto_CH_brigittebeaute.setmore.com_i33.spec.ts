import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brigittebeaute.setmore.com_i33', ['https://brigittebeaute.setmore.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
