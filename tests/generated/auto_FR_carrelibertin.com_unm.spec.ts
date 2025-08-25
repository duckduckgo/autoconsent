import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_carrelibertin.com_unm', ['https://www.carrelibertin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
