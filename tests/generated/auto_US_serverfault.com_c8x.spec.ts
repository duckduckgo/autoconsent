import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_serverfault.com_c8x', ['https://serverfault.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
