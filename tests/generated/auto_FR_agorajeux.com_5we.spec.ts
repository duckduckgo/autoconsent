import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agorajeux.com_5we', ['https://www.agorajeux.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
