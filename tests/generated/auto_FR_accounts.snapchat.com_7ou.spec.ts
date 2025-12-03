import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_accounts.snapchat.com_7ou', ['https://accounts.snapchat.com/accounts/v2/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
