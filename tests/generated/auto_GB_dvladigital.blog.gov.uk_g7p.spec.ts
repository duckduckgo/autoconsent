import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dvladigital.blog.gov.uk_g7p', ['https://dvladigital.blog.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
