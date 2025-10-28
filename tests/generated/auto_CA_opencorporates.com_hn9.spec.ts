import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_opencorporates.com_hn9', ['https://opencorporates.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
