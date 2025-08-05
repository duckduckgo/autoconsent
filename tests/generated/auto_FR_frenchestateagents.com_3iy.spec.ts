import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frenchestateagents.com_3iy', ['https://www.frenchestateagents.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
