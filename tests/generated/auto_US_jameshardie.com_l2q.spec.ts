import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jameshardie.com_l2q', ['https://www.jameshardie.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
