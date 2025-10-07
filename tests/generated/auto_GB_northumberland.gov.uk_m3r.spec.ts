import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_northumberland.gov.uk_m3r', ['https://www.northumberland.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
