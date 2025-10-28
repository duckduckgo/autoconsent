import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_liverpool.gov.uk_rbq', ['https://liverpool.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
