import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erasmusplay.com_qhp', ['https://erasmusplay.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
