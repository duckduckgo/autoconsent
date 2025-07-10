import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_agupubs.onlinelibrary.wiley.com_n25', ['https://agupubs.onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
