import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lectura-specs.com_0iq', ['https://www.lectura-specs.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
