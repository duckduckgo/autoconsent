import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_latamairlines.com_7lj', ['https://www.latamairlines.com/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
