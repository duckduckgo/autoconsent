import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_morrisons.jobs_u6q', ['https://www.morrisons.jobs/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
