import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_support.captureone.com_urs', ['https://support.captureone.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
