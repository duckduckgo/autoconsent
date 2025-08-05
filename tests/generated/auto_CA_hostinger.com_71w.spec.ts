import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hostinger.com_71w', ['https://www.hostinger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
