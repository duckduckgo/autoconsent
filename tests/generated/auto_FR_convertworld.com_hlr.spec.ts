import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_convertworld.com_hlr', ['https://www.convertworld.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
