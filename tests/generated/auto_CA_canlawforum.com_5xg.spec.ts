import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_canlawforum.com_5xg', ['https://canlawforum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
