import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_accounts.snapchat.com_0lh', ['https://accounts.snapchat.com/accounts/v2/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
