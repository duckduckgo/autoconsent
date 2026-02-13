import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_recyclemyelectronics.ca_h1p', ['https://recyclemyelectronics.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
