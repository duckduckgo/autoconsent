import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fareham.gov.uk_x1a', ['https://www.fareham.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
