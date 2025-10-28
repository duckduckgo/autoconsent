import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_newham.gov.uk_wj5', ['https://www.newham.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
