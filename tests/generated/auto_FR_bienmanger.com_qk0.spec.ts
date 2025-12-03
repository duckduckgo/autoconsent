import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bienmanger.com_qk0', ['https://www.bienmanger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
