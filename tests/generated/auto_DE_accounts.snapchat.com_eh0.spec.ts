import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_accounts.snapchat.com_eh0', ['https://accounts.snapchat.com/v2/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
