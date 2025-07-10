import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gloucestershire.gov.uk_0hi', ['https://www.gloucestershire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
