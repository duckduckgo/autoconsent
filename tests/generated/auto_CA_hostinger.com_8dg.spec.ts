import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hostinger.com_8dg', ['https://www.hostinger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
