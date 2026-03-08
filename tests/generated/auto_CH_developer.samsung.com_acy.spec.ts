import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_developer.samsung.com_acy', ['https://developer.samsung.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
