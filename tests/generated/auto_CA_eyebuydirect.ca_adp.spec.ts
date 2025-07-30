import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_eyebuydirect.ca_adp', ['https://www.eyebuydirect.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
