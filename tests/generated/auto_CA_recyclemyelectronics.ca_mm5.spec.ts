import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_recyclemyelectronics.ca_mm5', ['https://recyclemyelectronics.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
