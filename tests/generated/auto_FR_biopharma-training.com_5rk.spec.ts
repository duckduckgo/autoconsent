import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_biopharma-training.com_5rk', ['https://biopharma-training.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
