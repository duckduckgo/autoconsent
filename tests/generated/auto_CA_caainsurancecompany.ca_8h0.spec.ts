import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_caainsurancecompany.ca_8h0', ['https://www.caainsurancecompany.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
