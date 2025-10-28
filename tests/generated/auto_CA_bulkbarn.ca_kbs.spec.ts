import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bulkbarn.ca_kbs', ['https://www.bulkbarn.ca/home-en/index_deals.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
