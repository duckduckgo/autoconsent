import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gateshead.gov.uk_0', ['https://www.gateshead.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
