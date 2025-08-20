import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thedrardisshow.com_0', ['https://thedrardisshow.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
