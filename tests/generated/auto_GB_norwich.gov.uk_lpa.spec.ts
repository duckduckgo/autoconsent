import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_norwich.gov.uk_lpa', ['https://www.norwich.gov.uk/site/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
