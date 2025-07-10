import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lewisham.gov.uk_xuk', ['https://lewisham.gov.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
