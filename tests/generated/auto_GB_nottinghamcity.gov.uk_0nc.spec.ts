import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nottinghamcity.gov.uk_0nc', ['https://www.nottinghamcity.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
