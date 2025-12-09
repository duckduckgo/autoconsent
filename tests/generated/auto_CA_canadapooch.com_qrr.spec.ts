import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_canadapooch.com_qrr', ['https://ca.canadapooch.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
