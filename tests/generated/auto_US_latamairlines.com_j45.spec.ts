import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_latamairlines.com_j45', ['https://www.latamairlines.com/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
