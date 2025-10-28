import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_na.linkedin.com_0nj', ['https://na.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
