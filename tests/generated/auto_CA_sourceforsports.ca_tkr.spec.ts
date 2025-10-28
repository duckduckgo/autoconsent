import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sourceforsports.ca_tkr', ['https://www.sourceforsports.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
