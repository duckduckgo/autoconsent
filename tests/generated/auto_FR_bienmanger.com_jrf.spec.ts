import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bienmanger.com_jrf', ['https://www.bienmanger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
