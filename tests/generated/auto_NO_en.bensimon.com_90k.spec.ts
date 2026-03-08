import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_en.bensimon.com_90k', ['https://en.bensimon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
