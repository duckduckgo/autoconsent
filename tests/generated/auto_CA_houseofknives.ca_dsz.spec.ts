import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_houseofknives.ca_dsz', ['https://houseofknives.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
