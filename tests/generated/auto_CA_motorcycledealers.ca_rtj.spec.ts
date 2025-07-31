import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_motorcycledealers.ca_rtj', ['https://www.motorcycledealers.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
