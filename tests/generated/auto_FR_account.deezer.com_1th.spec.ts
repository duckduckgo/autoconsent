import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_account.deezer.com_1th', ['https://account.deezer.com/login/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
