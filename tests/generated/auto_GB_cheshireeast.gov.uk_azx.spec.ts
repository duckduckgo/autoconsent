import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cheshireeast.gov.uk_azx', ['https://www.cheshireeast.gov.uk/home.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
