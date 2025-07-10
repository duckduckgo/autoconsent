import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_onlinelibrary.wiley.com_zed', ['https://onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
