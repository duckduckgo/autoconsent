import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lectura-specs.com_hh2', ['https://www.lectura-specs.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
