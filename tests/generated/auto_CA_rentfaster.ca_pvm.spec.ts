import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rentfaster.ca_pvm', ['https://www.rentfaster.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
