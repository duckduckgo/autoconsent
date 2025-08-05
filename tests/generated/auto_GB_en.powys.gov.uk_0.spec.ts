import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_en.powys.gov.uk_0', ['https://en.powys.gov.uk/?ccp=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
