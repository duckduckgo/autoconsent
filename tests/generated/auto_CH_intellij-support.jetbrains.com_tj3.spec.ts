import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_intellij-support.jetbrains.com_tj3', ['https://intellij-support.jetbrains.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
