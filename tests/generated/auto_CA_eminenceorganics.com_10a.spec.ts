import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_eminenceorganics.com_10a', ['https://eminenceorganics.com/ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
