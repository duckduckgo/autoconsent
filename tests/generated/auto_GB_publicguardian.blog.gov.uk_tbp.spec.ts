import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_publicguardian.blog.gov.uk_tbp', ['https://publicguardian.blog.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
