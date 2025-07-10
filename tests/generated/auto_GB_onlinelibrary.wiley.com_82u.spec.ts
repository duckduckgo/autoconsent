import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onlinelibrary.wiley.com_82u', ['https://onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
