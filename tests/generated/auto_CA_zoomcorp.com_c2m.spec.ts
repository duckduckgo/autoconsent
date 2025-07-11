import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_zoomcorp.com_c2m', ['https://zoomcorp.com/en/ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
