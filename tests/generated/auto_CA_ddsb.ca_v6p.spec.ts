import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ddsb.ca_v6p', ['https://www.ddsb.ca/en/index.aspx'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
