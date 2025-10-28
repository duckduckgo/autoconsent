import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_macommunaute.ca_7lz', ['https://macommunaute.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
