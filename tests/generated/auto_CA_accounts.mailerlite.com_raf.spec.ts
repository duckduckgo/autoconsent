import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_accounts.mailerlite.com_raf', ['https://accounts.mailerlite.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
