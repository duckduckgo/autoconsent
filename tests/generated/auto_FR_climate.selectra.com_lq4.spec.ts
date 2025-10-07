import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_climate.selectra.com_lq4', ['https://climate.selectra.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
