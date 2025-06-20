import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_frenchestateagents.com_0', ['https://www.frenchestateagents.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
