import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_safran-group.com_i99', ['https://www.safran-group.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
