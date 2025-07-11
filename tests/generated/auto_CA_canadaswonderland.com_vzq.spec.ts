import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_canadaswonderland.com_vzq', ['https://www.canadaswonderland.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
