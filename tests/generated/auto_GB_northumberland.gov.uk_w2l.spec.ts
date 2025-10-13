import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_northumberland.gov.uk_w2l', ['https://www.northumberland.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
