import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_accounts.snapchat.com_0', ['https://accounts.snapchat.com/v2/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
