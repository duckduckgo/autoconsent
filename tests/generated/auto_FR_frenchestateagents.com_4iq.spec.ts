import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frenchestateagents.com_4iq', ['https://www.frenchestateagents.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
