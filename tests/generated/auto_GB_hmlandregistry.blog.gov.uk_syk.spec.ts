import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hmlandregistry.blog.gov.uk_syk', ['https://hmlandregistry.blog.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
