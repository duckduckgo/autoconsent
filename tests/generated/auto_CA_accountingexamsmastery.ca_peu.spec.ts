import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_accountingexamsmastery.ca_peu', ['https://accountingexamsmastery.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
