import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bpioutdoors.com_k4s', ['https://bpioutdoors.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
