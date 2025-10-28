import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hertfordshire.gov.uk_3ot', ['https://www.hertfordshire.gov.uk/home.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
