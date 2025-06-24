import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_timeshighereducation.com_0', ['https://www.timeshighereducation.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
