import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jobs.strawberryhotels.com_fl5', ['https://jobs.strawberryhotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
