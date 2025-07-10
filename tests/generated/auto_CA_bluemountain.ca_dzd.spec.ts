import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bluemountain.ca_dzd', ['https://www.bluemountain.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
