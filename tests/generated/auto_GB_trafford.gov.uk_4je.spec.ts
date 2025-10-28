import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trafford.gov.uk_4je', ['https://www.trafford.gov.uk/Home.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
