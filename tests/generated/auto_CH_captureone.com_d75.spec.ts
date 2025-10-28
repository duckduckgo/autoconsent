import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_captureone.com_d75', ['https://www.captureone.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
