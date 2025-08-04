import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frenchestateagents.com_0ma', ['https://www.frenchestateagents.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
