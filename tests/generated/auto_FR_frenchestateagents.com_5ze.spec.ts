import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_frenchestateagents.com_5ze', ['https://www.frenchestateagents.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
