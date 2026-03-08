import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_eminenceorganics.com_x56', ['https://eminenceorganics.com/ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
