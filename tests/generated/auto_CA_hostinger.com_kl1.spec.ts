import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hostinger.com_kl1', ['https://www.hostinger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
