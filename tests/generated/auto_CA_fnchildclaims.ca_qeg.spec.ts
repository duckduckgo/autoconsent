import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fnchildclaims.ca_qeg', ['https://fnchildclaims.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
