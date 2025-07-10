import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_harborfreight.com_l0v', ['https://www.harborfreight.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
