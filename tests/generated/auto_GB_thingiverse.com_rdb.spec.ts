import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thingiverse.com_rdb', ['https://www.thingiverse.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
