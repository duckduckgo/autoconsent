import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jobs.strawberryhotels.com_wc1', ['https://jobs.strawberryhotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
