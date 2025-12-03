import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_homehardware.ca_4ih', ['https://www.homehardware.ca/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
