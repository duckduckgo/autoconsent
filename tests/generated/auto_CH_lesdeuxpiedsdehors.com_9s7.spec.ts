import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lesdeuxpiedsdehors.com_9s7', ['https://lesdeuxpiedsdehors.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
