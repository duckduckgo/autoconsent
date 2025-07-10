import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_timeshighereducation.com_x0h', ['https://www.timeshighereducation.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
