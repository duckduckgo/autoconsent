import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_north-norfolk.gov.uk_o51', ['https://www.north-norfolk.gov.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
