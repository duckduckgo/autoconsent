import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_westsussex.gov.uk_0', ['https://www.westsussex.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
