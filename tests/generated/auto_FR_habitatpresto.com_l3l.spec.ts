import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_habitatpresto.com_l3l', ['https://www.habitatpresto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
