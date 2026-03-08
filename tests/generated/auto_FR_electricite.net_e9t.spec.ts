import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_electricite.net_e9t', ['https://electricite.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
