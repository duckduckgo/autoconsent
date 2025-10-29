import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_celestron.com_myn', ['https://www.celestron.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
