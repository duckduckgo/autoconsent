import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_parissecret.com_uox', ['https://parissecret.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
