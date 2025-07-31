import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_eyebuydirect.ca_vtv', ['https://www.eyebuydirect.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
