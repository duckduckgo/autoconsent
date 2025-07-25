import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_millemercismariage.com_dr3', ['https://www.millemercismariage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
