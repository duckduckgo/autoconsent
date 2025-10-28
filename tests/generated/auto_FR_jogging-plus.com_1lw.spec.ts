import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jogging-plus.com_1lw', ['https://jogging-plus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
