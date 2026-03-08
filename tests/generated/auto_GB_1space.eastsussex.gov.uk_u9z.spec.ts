import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_1space.eastsussex.gov.uk_u9z', ['https://1space.eastsussex.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
