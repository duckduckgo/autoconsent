import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_northnorthants.gov.uk_0', ['https://www.northnorthants.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
