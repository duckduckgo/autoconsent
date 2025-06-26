import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_skysports.com_t7a', ['https://www.skysports.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
