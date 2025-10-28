import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_totalenergies.com_g15', ['https://totalenergies.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
