import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_montrealsecret.co_l8l', ['https://montrealsecret.co/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
