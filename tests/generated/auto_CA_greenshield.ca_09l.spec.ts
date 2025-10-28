import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_greenshield.ca_09l', ['https://www.greenshield.ca/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
