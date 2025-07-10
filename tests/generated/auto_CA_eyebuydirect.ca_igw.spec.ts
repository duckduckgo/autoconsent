import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_eyebuydirect.ca_igw', ['https://www.eyebuydirect.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
