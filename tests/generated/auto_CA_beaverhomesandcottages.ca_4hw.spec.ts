import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_beaverhomesandcottages.ca_4hw', ['https://beaverhomesandcottages.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
