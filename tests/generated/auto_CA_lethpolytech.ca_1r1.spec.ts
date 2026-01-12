import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lethpolytech.ca_1r1', ['https://lethpolytech.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
