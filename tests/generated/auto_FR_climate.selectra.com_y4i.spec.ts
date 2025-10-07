import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_climate.selectra.com_y4i', ['https://climate.selectra.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
