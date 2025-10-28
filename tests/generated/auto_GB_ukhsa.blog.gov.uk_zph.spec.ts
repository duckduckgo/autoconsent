import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ukhsa.blog.gov.uk_zph', ['https://ukhsa.blog.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
