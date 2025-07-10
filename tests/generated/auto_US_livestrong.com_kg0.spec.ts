import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_livestrong.com_kg0', ['https://www.livestrong.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
