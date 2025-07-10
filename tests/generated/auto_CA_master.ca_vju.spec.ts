import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_master.ca_vju', ['https://www.master.ca/professional/welcome'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
