import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_canadaswonderland.com_mxw', ['https://www.canadaswonderland.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
