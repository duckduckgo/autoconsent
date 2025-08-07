import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sunderland.gov.uk_0', ['https://www.sunderland.gov.uk/?ccp=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
