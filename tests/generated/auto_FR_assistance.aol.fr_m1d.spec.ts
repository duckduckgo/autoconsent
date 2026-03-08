import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assistance.aol.fr_m1d', ['https://assistance.aol.fr/?guccounter=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
