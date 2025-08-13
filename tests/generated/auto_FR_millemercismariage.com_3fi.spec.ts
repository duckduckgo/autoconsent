import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_millemercismariage.com_3fi', ['https://www.millemercismariage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
