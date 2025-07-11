import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_thingiverse.com_oce', ['https://www.thingiverse.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
