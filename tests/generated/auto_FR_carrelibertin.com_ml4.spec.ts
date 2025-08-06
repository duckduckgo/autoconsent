import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_carrelibertin.com_ml4', ['https://www.carrelibertin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
