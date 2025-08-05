import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_reading.gov.uk_0', ['https://www.reading.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
