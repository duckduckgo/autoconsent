import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meltingmots.com_i58', ['https://meltingmots.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
