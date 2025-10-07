import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_habitatpresto.com_su2', ['https://www.habitatpresto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
