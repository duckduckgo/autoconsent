import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_support.ccleaner.com_1oi', ['https://support.ccleaner.com/s/?language=en_US'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
