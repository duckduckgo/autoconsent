import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_caainsurancecompany.ca_n0d', ['https://www.caainsurancecompany.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
