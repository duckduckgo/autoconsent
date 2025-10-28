import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_northyorks.gov.uk_a2p', ['https://www.northyorks.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
