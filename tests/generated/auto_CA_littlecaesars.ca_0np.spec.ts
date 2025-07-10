import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_littlecaesars.ca_0np', ['https://littlecaesars.ca/en-ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
