import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_torontohumanesociety.com_lor', ['https://www.torontohumanesociety.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
