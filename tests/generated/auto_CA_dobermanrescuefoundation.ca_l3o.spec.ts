import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dobermanrescuefoundation.ca_l3o', ['https://dobermanrescuefoundation.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
