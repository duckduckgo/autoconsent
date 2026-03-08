import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bowenislandmunicipality.ca_zbp', ['https://bowenislandmunicipality.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
