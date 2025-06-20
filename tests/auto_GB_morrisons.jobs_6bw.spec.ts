import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_morrisons.jobs_6bw', ['https://www.morrisons.jobs/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
