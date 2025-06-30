import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_skysports.com_mbi', ['https://www.skysports.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
