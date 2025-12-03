import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kirklees.gov.uk_0', ['https://www.kirklees.gov.uk/beta/default.aspx'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
