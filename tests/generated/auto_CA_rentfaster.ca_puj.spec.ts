import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rentfaster.ca_puj', ['https://www.rentfaster.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
