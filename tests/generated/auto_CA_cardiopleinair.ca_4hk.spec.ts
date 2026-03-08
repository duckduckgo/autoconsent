import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cardiopleinair.ca_4hk', ['https://cardiopleinair.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
