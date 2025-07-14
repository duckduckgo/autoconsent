import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_conservationhamilton.ca_h7f', ['https://conservationhamilton.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
