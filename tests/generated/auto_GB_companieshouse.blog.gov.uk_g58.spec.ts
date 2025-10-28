import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_companieshouse.blog.gov.uk_g58', ['https://companieshouse.blog.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
