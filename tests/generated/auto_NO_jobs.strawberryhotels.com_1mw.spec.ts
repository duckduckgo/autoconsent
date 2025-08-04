import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jobs.strawberryhotels.com_1mw', ['https://jobs.strawberryhotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
