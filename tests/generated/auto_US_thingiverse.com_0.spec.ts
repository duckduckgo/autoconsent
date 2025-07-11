import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thingiverse.com_0', ['https://www.thingiverse.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
