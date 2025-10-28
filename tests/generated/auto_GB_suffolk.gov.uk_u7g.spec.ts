import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_suffolk.gov.uk_u7g', ['https://www.suffolk.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
