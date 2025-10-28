import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_3mcanada.ca_1ff', ['https://www.3mcanada.ca/3M/en_CA/company-ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
