import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frenchestateagents.com_ghb', ['https://www.frenchestateagents.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
