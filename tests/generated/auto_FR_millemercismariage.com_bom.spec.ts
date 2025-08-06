import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_millemercismariage.com_bom', ['https://www.millemercismariage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
