import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_thingiverse.com_rwa', ['https://www.thingiverse.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
