import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_recyclemyelectronics.ca_ks9', ['https://recyclemyelectronics.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
