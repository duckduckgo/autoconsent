import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_outboarddealers.ca_mt8', ['https://www.outboarddealers.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
