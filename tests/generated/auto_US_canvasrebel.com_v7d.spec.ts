import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_canvasrebel.com_v7d', ['https://canvasrebel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
