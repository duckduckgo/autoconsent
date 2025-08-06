import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rother.gov.uk_5yl', ['https://www.rother.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
