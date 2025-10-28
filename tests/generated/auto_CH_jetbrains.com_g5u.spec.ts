import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_jetbrains.com_g5u', ['https://www.jetbrains.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
