import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_norfolk.gov.uk_5gr', ['https://www.norfolk.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
