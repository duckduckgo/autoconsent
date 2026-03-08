import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_canadapooch.com_2fj', ['https://ca.canadapooch.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
